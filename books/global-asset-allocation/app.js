(function () {
  const BOOK = window.DUSHU_BOOK;
  const STORAGE_KEY = "dushu-global-asset-allocation-v1";
  const circ = 2 * Math.PI * 16;

  const state = {
    view: "home", // home | chapter
    chapterId: null,
    tab: "brief",
    progress: loadProgress(),
    chatBusy: false,
    guideStep: 0,
  };

  const el = {
    home: document.getElementById("view-home"),
    chapter: document.getElementById("view-chapter"),
    chapterList: document.getElementById("chapter-list"),
    homePct: document.getElementById("home-pct"),
    homeDone: document.getElementById("home-done"),
    homeRingFill: document.getElementById("home-ring-fill"),
    homeRingLabel: document.getElementById("home-ring-label"),
    headerTitle: document.getElementById("ch-header-title"),
    headerSub: document.getElementById("ch-header-sub"),
    chRingFill: document.getElementById("ch-ring-fill"),
    chRingLabel: document.getElementById("ch-ring-label"),
    tabbar: document.getElementById("tabbar"),
    panels: {
      brief: document.getElementById("panel-brief"),
      dialogue: document.getElementById("panel-dialogue"),
      mind: document.getElementById("panel-mind"),
      audio: document.getElementById("panel-audio"),
    },
    chatMessages: document.getElementById("chat-messages"),
    chips: document.getElementById("chips"),
    chatInput: document.getElementById("chat-input"),
    chatSend: document.getElementById("chat-send"),
    mindmap: document.getElementById("mindmap"),
    mindDetail: document.getElementById("mind-detail"),
    audioEl: document.getElementById("audio-el"),
    audioTitle: document.getElementById("audio-title"),
    audioSub: document.getElementById("audio-sub"),
    audioArt: document.getElementById("audio-art"),
    playBtn: document.getElementById("audio-play"),
    seek: document.getElementById("audio-seek"),
    timeCur: document.getElementById("audio-time-cur"),
    timeDur: document.getElementById("audio-time-dur"),
  };

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }
  function saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress));
  }
  function ensureChapterProgress(id) {
    if (!state.progress[id]) {
      state.progress[id] = { tabs: {}, done: false };
    }
    return state.progress[id];
  }
  function markTab(id, tab) {
    const p = ensureChapterProgress(id);
    p.tabs[tab] = true;
    const tabs = ["brief", "dialogue", "mind", "audio"];
    if (tabs.every((t) => p.tabs[t])) p.done = true;
    saveProgress();
    updateRings();
  }
  function doneCount() {
    return BOOK.chapters.filter((c) => state.progress[c.id]?.done).length;
  }
  function overallPct() {
    const n = BOOK.chapters.length;
    if (!n) return 0;
    let score = 0;
    BOOK.chapters.forEach((c) => {
      const p = state.progress[c.id];
      if (!p) return;
      if (p.done) score += 1;
      else {
        const t = Object.keys(p.tabs || {}).length;
        score += t / 4;
      }
    });
    return Math.round((score / n) * 100);
  }

  function setRing(fillEl, labelEl, pct) {
    const offset = circ - (pct / 100) * circ;
    fillEl.style.strokeDasharray = String(circ);
    fillEl.style.strokeDashoffset = String(offset);
    labelEl.textContent = pct + "%";
  }
  function updateRings() {
    const pct = overallPct();
    setRing(el.homeRingFill, el.homeRingLabel, pct);
    el.homePct.textContent = pct + "%";
    el.homeDone.textContent = doneCount() + " / " + BOOK.chapters.length;
    if (state.chapterId) {
      const p = state.progress[state.chapterId];
      let cp = 0;
      if (p?.done) cp = 100;
      else if (p?.tabs) cp = Math.round((Object.keys(p.tabs).length / 4) * 100);
      setRing(el.chRingFill, el.chRingLabel, cp);
    }
  }

  function showView(name) {
    state.view = name;
    el.home.classList.toggle("active", name === "home");
    el.chapter.classList.toggle("active", name === "chapter");
    el.tabbar.classList.toggle("hidden", name !== "chapter");
    if (name === "home") {
      pauseAudio();
      renderHome();
    }
  }

  function renderHome() {
    el.chapterList.innerHTML = "";
    BOOK.chapters.forEach((ch) => {
      const done = !!state.progress[ch.id]?.done;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chapter-item" + (done ? " done" : "");
      btn.innerHTML =
        '<div class="ch-num">' +
        escapeHtml(ch.num) +
        '</div><div class="ch-body"><div class="ch-title">' +
        escapeHtml(ch.title) +
        '</div><div class="ch-sub">' +
        escapeHtml(ch.subtitle) +
        '</div></div><div class="ch-meta">' +
        (done ? '<div class="done-tag">已完成</div>' : "") +
        "<div>" +
        escapeHtml(ch.audioDur) +
        "</div></div>";
      btn.addEventListener("click", () => openChapter(ch.id));
      el.chapterList.appendChild(btn);
    });
    updateRings();
  }

  function getChapter(id) {
    return BOOK.chapters.find((c) => c.id === id);
  }

  function openChapter(id, tab) {
    const ch = getChapter(id);
    if (!ch) return;
    state.chapterId = id;
    el.headerTitle.textContent = "第" + ch.num + "章 · " + ch.title;
    el.headerSub.textContent = ch.subtitle;
    showView("chapter");
    switchTab(tab || "brief", true);
    updateRings();
  }

  function switchTab(tab, force) {
    if (!force && state.tab === tab && state.view === "chapter") return;
    state.tab = tab;
    Object.keys(el.panels).forEach((k) => {
      el.panels[k].classList.toggle("active", k === tab);
    });
    document.querySelectorAll(".tab").forEach((t) => {
      t.classList.toggle("active", t.dataset.tab === tab);
    });
    const ch = getChapter(state.chapterId);
    if (!ch) return;
    markTab(ch.id, tab === "brief" ? "brief" : tab);
    if (tab === "brief") renderBrief(ch);
    if (tab === "dialogue") renderDialogue(ch);
    if (tab === "mind") renderMind(ch);
    if (tab === "audio") renderAudio(ch);
    else pauseAudio();
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderBrief(ch) {
    const b = ch.briefing;
    const paras = b.paragraphs
      .map(
        (p, i) =>
          '<div class="idea-card"><h3><span class="idea-num">' +
          (i + 1) +
          "</span>" +
          (i === 0 ? "核心觀念" : "延伸") +
          "</h3><p>" +
          escapeHtml(p) +
          "</p></div>"
      )
      .join("");
    const keys =
      '<p class="section-label">重點速記</p><ul class="keys-list">' +
      b.keys.map((k) => "<li>" + escapeHtml(k) + "</li>").join("") +
      "</ul>";
    el.panels.brief.innerHTML =
      '<div class="brief-hero"><div class="brief-badge">書摘</div><h2>' +
      escapeHtml(ch.title) +
      '</h2><p class="brief-meta">' +
      escapeHtml(ch.subtitle) +
      " · 音訊約 " +
      escapeHtml(ch.audioDur) +
      "</p></div>" +
      paras +
      keys +
      '<div class="quote-box"><p>「' +
      escapeHtml(b.quote) +
      '」</p><cite>— 本章帶讀摘要</cite></div>' +
      '<div class="cta-row">' +
      '<button type="button" class="btn btn-primary" data-go="dialogue">開始對話帶讀</button>' +
      '<button type="button" class="btn btn-ghost" data-go="audio">聽音訊</button>' +
      "</div>" +
      '<div class="mark-done-bar"><button type="button" class="btn btn-teal" id="btn-mark-done">' +
      (state.progress[ch.id]?.done ? "已標記完成 ✓" : "標記本章完成") +
      "</button></div>";
    el.panels.brief.querySelectorAll("[data-go]").forEach((btn) => {
      btn.addEventListener("click", () => switchTab(btn.dataset.go));
    });
    el.panels.brief.querySelector("#btn-mark-done").addEventListener("click", () => {
      const p = ensureChapterProgress(ch.id);
      ["brief", "dialogue", "mind", "audio"].forEach((t) => (p.tabs[t] = true));
      p.done = true;
      saveProgress();
      updateRings();
      renderBrief(ch);
    });
  }

  function addBubble(side, text) {
    const div = document.createElement("div");
    div.className = "bubble " + side;
    if (side === "guide") {
      div.innerHTML =
        '<div class="bubble-meta"><div class="avatar">導</div><span class="guide-name">帶讀導航</span></div>' +
        escapeHtml(text);
    } else {
      div.textContent = text;
    }
    el.chatMessages.appendChild(div);
    el.chatMessages.parentElement.scrollTop = el.chatMessages.parentElement.scrollHeight;
  }

  function showTyping() {
    const t = document.createElement("div");
    t.className = "typing";
    t.id = "typing";
    t.innerHTML = "<span></span><span></span><span></span>";
    el.chatMessages.appendChild(t);
  }
  function hideTyping() {
    document.getElementById("typing")?.remove();
  }

  function renderChips(ch) {
    el.chips.innerHTML = "";
    const steps = ch.dialogue.steps || [];
    if (state.guideStep < steps.length) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip chip-next";
      btn.textContent = "繼續帶讀 →";
      btn.addEventListener("click", async () => {
        if (state.chatBusy) return;
        const text = steps[state.guideStep];
        state.guideStep += 1;
        await userSay("繼續", text);
        renderChips(ch);
      });
      el.chips.appendChild(btn);
    }
    ch.dialogue.chips.forEach((c) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.textContent = c.label;
      btn.addEventListener("click", () => userSay(c.label, c.reply));
      el.chips.appendChild(btn);
    });
  }

  function matchKeyword(ch, text) {
    const lower = text.toLowerCase();
    for (const kw of ch.dialogue.keywords) {
      if (kw.keys.some((k) => lower.includes(k.toLowerCase()))) return kw.reply;
    }
    return (
      "好問題。記住本章重點：「" +
      ch.briefing.quote +
      "」你可以再問資產、負債、恐懼、行動呢啲關鍵詞，或者撳下面建議回覆。"
    );
  }

  async function userSay(text, canned) {
    if (state.chatBusy) return;
    state.chatBusy = true;
    el.chatSend.disabled = true;
    el.chips.querySelectorAll(".chip").forEach((c) => (c.disabled = true));
    addBubble("user", text);
    showTyping();
    await wait(500 + Math.random() * 400);
    hideTyping();
    const ch = getChapter(state.chapterId);
    addBubble("guide", canned || matchKeyword(ch, text));
    el.chips.querySelectorAll(".chip").forEach((c) => (c.disabled = false));
    el.chatSend.disabled = false;
    state.chatBusy = false;
    markTab(ch.id, "dialogue");
  }

  function wait(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  function renderDialogue(ch) {
    el.chatMessages.innerHTML = "";
    state.guideStep = 0;
    addBubble("guide", ch.dialogue.opening);
    const steps = ch.dialogue.steps || [];
    if (steps.length) {
      addBubble("guide", steps[0]);
      state.guideStep = 1;
    }
    renderChips(ch);
    el.chatInput.value = "";
  }

  function renderMind(ch) {
    const nodes = ch.mindmap.nodes;
    const W = 400;
    const H = Math.max(420, ...nodes.map((n) => n.y + 50));
    const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
    let lines = "";
    nodes.forEach((n) => {
      if (!n.parent || !byId[n.parent]) return;
      const p = byId[n.parent];
      lines +=
        '<line x1="' +
        p.x +
        '" y1="' +
        (p.y + 18) +
        '" x2="' +
        n.x +
        '" y2="' +
        (n.y - 18) +
        '" stroke="rgba(201,168,108,0.35)" stroke-width="1.5"/>';
    });
    let shapes = "";
    nodes.forEach((n) => {
      const isRoot = !n.parent;
      const w = isRoot ? 120 : Math.min(110, 16 + n.label.length * 12);
      const h = 36;
      shapes +=
        '<g class="mmap-node" data-id="' +
        escapeHtml(n.id) +
        '">' +
        '<rect x="' +
        (n.x - w / 2) +
        '" y="' +
        (n.y - h / 2) +
        '" width="' +
        w +
        '" height="' +
        h +
        '" rx="10" fill="' +
        (isRoot ? "#c9a86c" : "#283445") +
        '" stroke="' +
        (isRoot ? "#d4b87a" : "rgba(255,255,255,0.12)") +
        '"/>' +
        '<text x="' +
        n.x +
        '" y="' +
        (n.y + 5) +
        '" text-anchor="middle" fill="' +
        (isRoot ? "#1a1508" : "#f2f4f7") +
        '" font-size="12" font-weight="600" font-family="Noto Sans TC, sans-serif">' +
        escapeHtml(n.label) +
        "</text></g>";
    });
    el.mindmap.setAttribute("viewBox", "0 0 " + W + " " + H);
    el.mindmap.innerHTML = lines + shapes;
    el.mindDetail.innerHTML =
      "<h4>點擊節點</h4><p>選擇心智圖上的概念，查看簡短解說。</p>";
    el.mindmap.querySelectorAll(".mmap-node").forEach((g) => {
      g.addEventListener("click", () => {
        const n = byId[g.dataset.id];
        if (!n) return;
        el.mindDetail.innerHTML =
          "<h4>" + escapeHtml(n.label) + "</h4><p>" + escapeHtml(n.detail) + "</p>";
        markTab(ch.id, "mind");
      });
    });
  }

  function fmtTime(s) {
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ":" + String(sec).padStart(2, "0");
  }

  function pauseAudio() {
    const a = el.audioEl;
    if (!a.paused) a.pause();
    updatePlayBtn();
  }

  function updatePlayBtn() {
    const playing = !el.audioEl.paused && !el.audioEl.ended;
    el.playBtn.innerHTML = playing
      ? '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>'
      : '<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
  }

  function renderAudio(ch) {
    el.audioTitle.textContent = ch.title;
    el.audioSub.textContent =
      "粵語柔和舒適女聲帶讀 · " + ch.audioDur + " · zh-HK-HiuMaanNeural";
    el.audioArt.textContent = ch.num;
    const a = el.audioEl;
    const nextSrc = ch.audio;
    if (!a.src.endsWith(nextSrc) && !a.getAttribute("src")?.endsWith(nextSrc)) {
      a.src = nextSrc;
      a.load();
    }
    updatePlayBtn();
    markTab(ch.id, "audio");
  }

  // Events
  document.getElementById("btn-back").addEventListener("click", () => {
    pauseAudio();
    showView("home");
  });

  document.querySelectorAll(".tab").forEach((t) => {
    t.addEventListener("click", () => switchTab(t.dataset.tab));
  });

  el.chatSend.addEventListener("click", () => {
    const v = el.chatInput.value.trim();
    if (!v) return;
    el.chatInput.value = "";
    userSay(v);
  });
  el.chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      el.chatSend.click();
    }
  });

  el.playBtn.addEventListener("click", () => {
    const a = el.audioEl;
    if (a.paused) a.play();
    else a.pause();
    updatePlayBtn();
  });
  document.getElementById("audio-back").addEventListener("click", () => {
    el.audioEl.currentTime = Math.max(0, el.audioEl.currentTime - 10);
  });
  document.getElementById("audio-fwd").addEventListener("click", () => {
    el.audioEl.currentTime = Math.min(
      el.audioEl.duration || 0,
      el.audioEl.currentTime + 10
    );
  });
  el.seek.addEventListener("input", () => {
    const a = el.audioEl;
    if (!a.duration) return;
    a.currentTime = (el.seek.value / 1000) * a.duration;
  });
  el.audioEl.addEventListener("timeupdate", () => {
    const a = el.audioEl;
    el.timeCur.textContent = fmtTime(a.currentTime);
    if (a.duration) {
      el.seek.value = String(Math.round((a.currentTime / a.duration) * 1000));
      el.timeDur.textContent = fmtTime(a.duration);
    }
  });
  el.audioEl.addEventListener("loadedmetadata", () => {
    el.timeDur.textContent = fmtTime(el.audioEl.duration);
  });
  el.audioEl.addEventListener("play", updatePlayBtn);
  el.audioEl.addEventListener("pause", updatePlayBtn);
  el.audioEl.addEventListener("ended", updatePlayBtn);

  document.querySelectorAll(".rate-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      el.audioEl.playbackRate = parseFloat(btn.dataset.rate);
      document.querySelectorAll(".rate-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  // boot
  document.getElementById("book-title").textContent = BOOK.title;
  document.getElementById("book-author").textContent = BOOK.author + " · 對話式帶讀";
  document.getElementById("stat-chapters").textContent = String(BOOK.chapters.length);
  setRing(el.homeRingFill, el.homeRingLabel, 0);
  setRing(el.chRingFill, el.chRingLabel, 0);
  showView("home");
})();
