/**
 * 讀書 · 閱讀記憶（localStorage）
 * 書頁同書庫共用。key：dushu-memory-<bookId>
 */
(function () {
  const PREFIX = "dushu-memory-";
  const THROTTLE_MS = 2000;

  function bookIdFromHref(href) {
    const m = String(href || "").match(/books\/([^/]+)/);
    return m ? m[1] : "";
  }

  function bookIdFromPath() {
    return bookIdFromHref(location.pathname);
  }

  function safeParse(raw) {
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }

  function get(bookId) {
    if (!bookId) return null;
    const data = safeParse(localStorage.getItem(PREFIX + bookId));
    if (!data || typeof data !== "object") return null;
    return data;
  }

  function set(bookId, patch) {
    if (!bookId) return null;
    const prev = get(bookId) || {};
    const next = Object.assign({}, prev, patch, {
      lastOpened: new Date().toISOString(),
    });
    if (typeof next.currentTime === "number" && typeof next.duration === "number" && next.duration > 0) {
      next.percent = Math.min(100, Math.round((next.currentTime / next.duration) * 100));
    }
    try {
      localStorage.setItem(PREFIX + bookId, JSON.stringify(next));
    } catch (e) {
      /* quota */
    }
    return next;
  }

  function clear(bookId) {
    if (!bookId) return;
    localStorage.removeItem(PREFIX + bookId);
  }

  function clearAll() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith(PREFIX)) keys.push(k);
    }
    keys.forEach((k) => localStorage.removeItem(k));
  }

  function listAll() {
    const out = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (!k || !k.startsWith(PREFIX)) continue;
      const bookId = k.slice(PREFIX.length);
      const data = get(bookId);
      if (data) out.push(Object.assign({ bookId: bookId }, data));
    }
    out.sort(function (a, b) {
      return String(b.lastOpened || "").localeCompare(String(a.lastOpened || ""));
    });
    return out;
  }

  function fmtTime(s) {
    if (!isFinite(s) || s < 0) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ":" + String(sec).padStart(2, "0");
  }

  function remainingLabel(mem) {
    if (!mem) return "";
    const dur = Number(mem.duration) || 0;
    const cur = Number(mem.currentTime) || 0;
    if (dur > 0 && cur < dur) {
      const left = Math.max(0, dur - cur);
      return "剩餘 " + fmtTime(left);
    }
    if (mem.chapterTitle) return "第" + (mem.chapterNum || "?") + "章";
    return "繼續聽";
  }

  function chapterLabel(mem) {
    if (!mem) return "";
    const num = mem.chapterNum != null ? String(mem.chapterNum) : String((mem.chapterIndex || 0) + 1);
    const title = mem.chapterTitle || "";
    return title ? "第" + num + "章 · " + title : "第" + num + "章";
  }

  const api = {
    PREFIX: PREFIX,
    bookIdFromHref: bookIdFromHref,
    bookIdFromPath: bookIdFromPath,
    get: get,
    set: set,
    clear: clear,
    clearAll: clearAll,
    listAll: listAll,
    fmtTime: fmtTime,
    remainingLabel: remainingLabel,
    chapterLabel: chapterLabel,
  };

  window.DushuMemory = api;

  /* ——— 書頁自動掛接 ——— */
  function wait(ms) {
    return new Promise(function (r) {
      setTimeout(r, ms);
    });
  }

  function findChapterByAudioSrc(src) {
    const BOOK = window.DUSHU_BOOK;
    if (!BOOK || !BOOK.chapters || !src) return null;
    const path = String(src).split("?")[0];
    for (let i = 0; i < BOOK.chapters.length; i++) {
      const ch = BOOK.chapters[i];
      if (!ch.audio) continue;
      if (path.endsWith(ch.audio) || path.indexOf("/" + ch.audio) !== -1) {
        return { chapter: ch, index: i };
      }
    }
    return null;
  }

  function injectBookStyles() {
    if (document.getElementById("dushu-memory-style")) return;
    const style = document.createElement("style");
    style.id = "dushu-memory-style";
    style.textContent =
      ".mem-banner{margin:12px 0 16px;padding:12px 14px;border-radius:14px;background:linear-gradient(135deg,rgba(15,107,255,.12),rgba(201,168,108,.14));border:1px solid rgba(15,107,255,.22);display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between}" +
      ".mem-banner-text{min-width:0;flex:1}" +
      ".mem-banner-kicker{font-size:11px;font-weight:700;color:#0F6BFF;letter-spacing:.04em;margin-bottom:2px}" +
      ".mem-banner-title{font-size:14px;font-weight:700;color:#f2f4f7}" +
      ".mem-banner-sub{font-size:12px;color:rgba(242,244,247,.65);margin-top:2px}" +
      ".mem-banner-actions{display:flex;gap:8px;flex-shrink:0}" +
      ".mem-btn{appearance:none;border:0;border-radius:999px;padding:8px 14px;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit}" +
      ".mem-btn-primary{background:#0F6BFF;color:#fff}" +
      ".mem-btn-ghost{background:transparent;color:rgba(242,244,247,.75);border:1px solid rgba(255,255,255,.18)}" +
      ".chapter-item.mem-resume{outline:2px solid rgba(15,107,255,.55);outline-offset:1px;border-color:rgba(15,107,255,.4)}" +
      ".chapter-item .mem-tag{color:#0F6BFF;font-weight:700;font-size:11px;margin-top:2px}";
    document.head.appendChild(style);
  }

  function attachBookPage() {
    const BOOK = window.DUSHU_BOOK;
    if (!BOOK || !BOOK.chapters) return;
    const bookId = bookIdFromPath();
    if (!bookId) return;
    const audio = document.getElementById("audio-el");
    if (!audio) return;

    injectBookStyles();

    let lastChapterIndex = 0;
    let lastChapter = BOOK.chapters[0] || null;
    let lastSaveAt = 0;
    const existing = get(bookId);
    if (existing && typeof existing.chapterIndex === "number") {
      lastChapterIndex = existing.chapterIndex;
      lastChapter = BOOK.chapters[lastChapterIndex] || lastChapter;
    }

    function captureChapter(ch, index) {
      if (!ch) return;
      lastChapter = ch;
      lastChapterIndex = index;
      set(bookId, {
        chapterId: ch.id,
        chapterIndex: index,
        chapterNum: ch.num,
        chapterTitle: ch.title,
        currentTime: 0,
        duration: 0,
        percent: existing && existing.chapterId === ch.id ? existing.percent : 0,
      });
      refreshBanner();
      highlightChapter();
    }

    function saveAudioProgress(force) {
      const now = Date.now();
      if (!force && now - lastSaveAt < THROTTLE_MS) return;
      lastSaveAt = now;
      const matched = findChapterByAudioSrc(audio.currentSrc || audio.src);
      if (matched) {
        lastChapter = matched.chapter;
        lastChapterIndex = matched.index;
      }
      if (!lastChapter) return;
      const cur = audio.currentTime || 0;
      const dur = audio.duration && isFinite(audio.duration) ? audio.duration : 0;
      // 未真正播過就唔寫（除非已有記憶要更新章節）
      const prev = get(bookId);
      if (cur < 0.5 && !prev) return;
      set(bookId, {
        chapterId: lastChapter.id,
        chapterIndex: lastChapterIndex,
        chapterNum: lastChapter.num,
        chapterTitle: lastChapter.title,
        currentTime: cur,
        duration: dur || (prev && prev.duration) || 0,
      });
    }

    function highlightChapter() {
      const mem = get(bookId);
      const list = document.getElementById("chapter-list");
      if (!list || !mem) return;
      const items = list.querySelectorAll(".chapter-item");
      items.forEach(function (btn, i) {
        btn.classList.toggle("mem-resume", i === mem.chapterIndex);
        let tag = btn.querySelector(".mem-tag");
        if (i === mem.chapterIndex) {
          if (!tag) {
            tag = document.createElement("div");
            tag.className = "mem-tag";
            const meta = btn.querySelector(".ch-meta");
            if (meta) meta.insertBefore(tag, meta.firstChild);
            else btn.appendChild(tag);
          }
          tag.textContent = "閱讀記憶";
        } else if (tag) {
          tag.remove();
        }
      });
    }

    function refreshBanner() {
      const home = document.querySelector("#view-home .main .home-hero") || document.querySelector("#view-home .main");
      if (!home) return;
      let banner = document.getElementById("mem-banner");
      const mem = get(bookId);
      if (!mem || mem.chapterIndex == null) {
        if (banner) banner.remove();
        return;
      }
      if (!banner) {
        banner = document.createElement("div");
        banner.id = "mem-banner";
        banner.className = "mem-banner";
        if (home.classList.contains("home-hero")) home.insertAdjacentElement("afterend", banner);
        else home.insertBefore(banner, home.firstChild);
      }
      banner.innerHTML =
        '<div class="mem-banner-text">' +
        '<div class="mem-banner-kicker">閱讀記憶</div>' +
        '<div class="mem-banner-title">' +
        escapeHtml(chapterLabel(mem)) +
        "</div>" +
        '<div class="mem-banner-sub">' +
        escapeHtml(remainingLabel(mem)) +
        (mem.percent ? " · " + mem.percent + "%" : "") +
        "</div></div>" +
        '<div class="mem-banner-actions">' +
        '<button type="button" class="mem-btn mem-btn-primary" data-mem-resume>繼續聽</button>' +
        '<button type="button" class="mem-btn mem-btn-ghost" data-mem-clear>清除</button>' +
        "</div>";
      banner.querySelector("[data-mem-resume]").addEventListener("click", function () {
        resumePlayback(mem, true);
      });
      banner.querySelector("[data-mem-clear]").addEventListener("click", function () {
        clear(bookId);
        banner.remove();
        document.querySelectorAll(".chapter-item.mem-resume").forEach(function (el) {
          el.classList.remove("mem-resume");
        });
        document.querySelectorAll(".mem-tag").forEach(function (el) {
          el.remove();
        });
      });
    }

    function escapeHtml(s) {
      return String(s)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    async function resumePlayback(mem, fromBanner) {
      if (!mem) mem = get(bookId);
      if (!mem) return;
      const idx = typeof mem.chapterIndex === "number" ? mem.chapterIndex : 0;
      const list = document.getElementById("chapter-list");
      let tries = 0;
      while (list && list.querySelectorAll(".chapter-item").length === 0 && tries < 40) {
        await wait(50);
        tries++;
      }
      const items = list ? list.querySelectorAll(".chapter-item") : [];
      const item = items[idx];
      if (item) item.click();
      await wait(80);
      const audioTab = document.querySelector('.tab[data-tab="audio"]');
      if (audioTab) audioTab.click();
      await wait(120);

      const target = Number(mem.currentTime) || 0;
      const applySeek = function () {
        if (target <= 0) return;
        try {
          const max = audio.duration && isFinite(audio.duration) ? audio.duration - 0.25 : target;
          audio.currentTime = Math.max(0, Math.min(target, max));
        } catch (e) {
          /* ignore */
        }
      };
      if (audio.readyState >= 1) applySeek();
      else audio.addEventListener("loadedmetadata", applySeek, { once: true });
      // 唔強制 autoplay（瀏覽器常擋）；用戶撳繼續聽後可再撳播放
      if (fromBanner) {
        try {
          const p = audio.play();
          if (p && p.catch) p.catch(function () {});
        } catch (e) {
          /* ignore */
        }
      }
    }

    // 章節列表：記錄點擊
    const chapterList = document.getElementById("chapter-list");
    if (chapterList) {
      chapterList.addEventListener("click", function (e) {
        const btn = e.target.closest(".chapter-item");
        if (!btn) return;
        const items = [...chapterList.querySelectorAll(".chapter-item")];
        const index = items.indexOf(btn);
        if (index < 0) return;
        const ch = BOOK.chapters[index];
        captureChapter(ch, index);
      });
    }

    // 監聽章節列表重繪後高亮
    if (chapterList) {
      const mo = new MutationObserver(function () {
        highlightChapter();
        refreshBanner();
      });
      mo.observe(chapterList, { childList: true });
    }

    audio.addEventListener("timeupdate", function () {
      saveAudioProgress(false);
    });
    audio.addEventListener("pause", function () {
      saveAudioProgress(true);
    });
    audio.addEventListener("ended", function () {
      saveAudioProgress(true);
    });
    window.addEventListener("pagehide", function () {
      saveAudioProgress(true);
    });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") saveAudioProgress(true);
    });

    // 延遲等 app.js renderHome
    setTimeout(function () {
      refreshBanner();
      highlightChapter();
      const params = new URLSearchParams(location.search);
      if (params.get("resume") === "1") {
        resumePlayback(get(bookId), true);
        // 清走 query，避免每次返回都自動播
        try {
          const url = new URL(location.href);
          url.searchParams.delete("resume");
          history.replaceState({}, "", url.pathname + url.search + url.hash);
        } catch (e) {
          /* ignore */
        }
      }
    }, 180);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(attachBookPage, 0);
    });
  } else {
    setTimeout(attachBookPage, 0);
  }
})();
