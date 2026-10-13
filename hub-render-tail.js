  const isMinimax = (b) => b.coverClass === "c-white" || b.voice === "minimax";

  const escapeHtml = (s) =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  const uniqueTracks = [...new Set(books.map((b) => b.track))];

  function cardHTML(b, variant) {
    const mm = isMinimax(b);
    const cls =
      variant === "rail"
        ? `rail-card${mm ? " rail-card--minimax" : ""}`
        : `book-card${mm ? " book-card--minimax" : ""}`;
    const badge = mm ? `<span class="mm-badge">MiniMax 新聲</span>` : "";
    return `<a class="${cls}" href="${escapeHtml(b.href)}" data-track="${escapeHtml(b.track)}" data-title="${escapeHtml(b.title)}" data-author="${escapeHtml(b.author)}" data-minimax="${mm ? "1" : "0"}">
      ${badge}
      <div class="book-cover ${escapeHtml(b.coverClass)}">
        <div class="cover-mark">${escapeHtml(b.mark)}</div>
        <span>${escapeHtml(b.title)}</span>
      </div>
      <div class="book-body">
        <div class="book-name">${escapeHtml(b.title)}</div>
        <div class="book-author">${escapeHtml(b.author)}</div>
        <div class="book-stats">
          <span class="pill accent">${escapeHtml(b.duration)}</span>
          <span class="pill">${escapeHtml(b.chapters)}</span>
        </div>
      </div>
    </a>`;
  }

  function railSection(title, subtitle, list, id, trackKey) {
    if (!list.length) return "";
    const cards = list.map((b) => cardHTML(b, "rail")).join("");
    const trackAttr = trackKey ? escapeHtml(trackKey) : "";
    return `<section class="rail-section" id="${id || ""}" data-rail-track="${trackAttr}">
      <div class="rail-head">
        <div>
          <h2 class="rail-title">${escapeHtml(title)}</h2>
          ${subtitle ? `<p class="rail-sub">${escapeHtml(subtitle)}</p>` : ""}
        </div>
      </div>
      <div class="rail-wrap">
        <div class="rail-scroller" data-rail>${cards}</div>
        <button type="button" class="rail-chevron" aria-label="向右滑" data-rail-next>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
    </section>`;
  }

  const railsEl = document.getElementById("rails");
  const gridEl = document.getElementById("book-grid");
  const chipsEl = document.getElementById("track-chips");
  const searchEl = document.getElementById("hub-search");
  const countEl = document.getElementById("book-count");
  const metaEl = document.getElementById("hero-meta");

  if (!railsEl || !gridEl || !chipsEl || !searchEl) return;

  const minimaxBooks = books.filter(isMinimax);
  const totalMin = books.reduce((acc, b) => {
    const m = String(b.duration).match(/(\d+)/);
    return acc + (m ? parseInt(m[1], 10) : 0);
  }, 0);

  if (metaEl) {
    metaEl.innerHTML = `<span>${books.length} 本</span><span>·</span><span>合共約 ${totalMin} 分鐘</span><span>·</span><span>粵語帶讀</span>`;
  }

  let railsHTML = "";
  railsHTML += railSection(
    "✨ MiniMax 新聲",
    "已換 ProfessionalHost 男聲嘅帶讀",
    minimaxBooks,
    "rail-minimax",
    "__minimax__"
  );
  uniqueTracks.forEach((track, i) => {
    const list = books.filter((b) => b.track === track);
    railsHTML += railSection(track, `${list.length} 本`, list, `rail-track-${i}`, track);
  });
  railsEl.innerHTML = railsHTML;
  gridEl.innerHTML = books.map((b) => cardHTML(b, "grid")).join("");

  chipsEl.innerHTML =
    `<button type="button" class="chip is-active" data-track="">全部</button>` +
    uniqueTracks
      .map(
        (t) =>
          `<button type="button" class="chip" data-track="${escapeHtml(t)}">${escapeHtml(t)}</button>`
      )
      .join("");

  let activeTrack = "";

  function applyFilters() {
    const q = (searchEl.value || "").trim().toLowerCase();
    let visible = 0;
    gridEl.querySelectorAll(".book-card").forEach((card) => {
      const track = card.getAttribute("data-track") || "";
      const hay = (
        (card.getAttribute("data-title") || "") +
        " " +
        (card.getAttribute("data-author") || "") +
        " " +
        track
      ).toLowerCase();
      const trackOk = !activeTrack || track === activeTrack;
      const qOk = !q || hay.includes(q);
      const show = trackOk && qOk;
      card.hidden = !show;
      if (show) visible++;
    });
    railsEl.querySelectorAll(".rail-section").forEach((sec) => {
      const railKey = sec.getAttribute("data-rail-track") || "";
      if (activeTrack) {
        if (railKey === "__minimax__") {
          // keep if any minimax card matches the track
          const has = [...sec.querySelectorAll(".rail-card")].some(
            (c) => c.getAttribute("data-track") === activeTrack
          );
          sec.hidden = !has;
        } else {
          sec.hidden = railKey !== activeTrack;
        }
      } else {
        sec.hidden = false;
      }
      sec.querySelectorAll(".rail-card").forEach((card) => {
        const track = card.getAttribute("data-track") || "";
        const hay = (
          (card.getAttribute("data-title") || "") +
          " " +
          (card.getAttribute("data-author") || "") +
          " " +
          track
        ).toLowerCase();
        const trackOk = !activeTrack || track === activeTrack;
        const qOk = !q || hay.includes(q);
        card.hidden = !(trackOk && qOk);
      });
    });
    if (countEl) countEl.textContent = String(visible);
  }

  chipsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    chipsEl.querySelectorAll(".chip").forEach((c) => c.classList.remove("is-active"));
    btn.classList.add("is-active");
    activeTrack = btn.getAttribute("data-track") || "";
    applyFilters();
  });

  searchEl.addEventListener("input", applyFilters);

  railsEl.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-rail-next]");
    if (!btn) return;
    const wrap = btn.closest(".rail-wrap");
    const scroller = wrap && wrap.querySelector("[data-rail]");
    if (scroller) {
      scroller.scrollBy({
        left: Math.min(320, scroller.clientWidth * 0.8),
        behavior: "smooth",
      });
    }
  });

  const tabs = document.querySelectorAll(".bottom-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");
    });
  });

  applyFilters();
