(function () {
  const books = [
    {
      href: "books/rich-dad-poor-dad/",
      title: "窮爸爸富爸爸",
      author: "Robert T. Kiyosaki",
      track: "現金流 · 心態",
      duration: "約 48 分鐘",
      chapters: "9 章",
      coverClass: "c1",
      mark: "富",
    },
    {
      href: "books/intelligent-investor/",
      title: "智慧型股票投資人",
      author: "Benjamin Graham",
      track: "價值投資",
      duration: "約 31 分鐘",
      chapters: "9 章",
      coverClass: "c2",
      mark: "智",
    },
    {
      href: "books/most-important-thing/",
      title: "投資最重要的事",
      author: "Howard Marks",
      track: "風險 · 周期",
      duration: "約 31 分鐘",
      chapters: "9 章",
      coverClass: "c3",
      mark: "要",
    },
    {
      href: "books/cashflow-quadrant/",
      title: "富爸爸有錢有理",
      author: "Robert T. Kiyosaki",
      track: "現金流象限",
      duration: "約 33 分鐘",
      chapters: "9 章",
      coverClass: "c4",
      mark: "象",
    },
  ];

  const grid = document.getElementById("book-grid");
  grid.innerHTML = books
    .map(
      (b) =>
        `<a class="book-card" href="${b.href}">
          <div class="book-cover ${b.coverClass}">
            <div class="cover-mark">${b.mark}</div>
            <span>${b.title}</span>
          </div>
          <div class="book-body">
            <div class="book-track">${b.track}</div>
            <div class="book-name">${b.title}</div>
            <div class="book-author">${b.author}</div>
            <div class="book-stats">
              <span class="pill accent">${b.duration}</span>
              <span class="pill">${b.chapters}</span>
            </div>
          </div>
        </a>`
    )
    .join("");
})();
