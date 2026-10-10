(function () {
  const books = [
    {"href": "books/rich-dad-poor-dad/", "title": "窮爸爸富爸爸", "author": "Robert T. Kiyosaki", "track": "現金流 · 心態", "duration": "約 48 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "富"},
    {"href": "books/intelligent-investor/", "title": "智慧型股票投資人", "author": "Benjamin Graham", "track": "價值投資", "duration": "約 31 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "智"},
    {"href": "books/most-important-thing/", "title": "投資最重要的事", "author": "Howard Marks", "track": "風險 · 周期", "duration": "約 31 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "要"},
    {"href": "books/cashflow-quadrant/", "title": "富爸爸有錢有理", "author": "Robert T. Kiyosaki", "track": "現金流象限", "duration": "約 33 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "象"},
    {"href": "books/psychology-of-money/", "title": "金錢心理學", "author": "Morgan Housel", "track": "被動指數 · 行為", "duration": "約 37 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "心"},
    {"href": "books/bogle-index-funds/", "title": "指數基金的勝算", "author": "John C. Bogle", "track": "被動指數", "duration": "約 37 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "指"},
    {"href": "books/poor-charlies-almanack/", "title": "窮查理寶典", "author": "Charlie Munger", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "查"},
    {"href": "books/market-cycles/", "title": "周期", "author": "Howard Marks", "track": "價值投資 · 周期", "duration": "約 37 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "周"},
    {"href": "books/rich-dad-guide/", "title": "富爸爸財務自由之路", "author": "Robert T. Kiyosaki", "track": "創業現金流", "duration": "約 37 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "自"},
    {"href": "books/zero-to-one/", "title": "從0到1", "author": "Peter Thiel", "track": "創業現金流", "duration": "約 37 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "0"},
    {"href": "books/security-analysis/", "title": "證券分析精華", "author": "Benjamin Graham", "track": "價值投資", "duration": "約 40 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "證"},
    {"href": "books/common-stocks/", "title": "普通股和不普通的利潤", "author": "Philip Fisher", "track": "價值投資", "duration": "約 40 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "普"},
    {"href": "books/buffett-letters/", "title": "巴菲特寫給股東的信選讀", "author": "Warren Buffett", "track": "價值投資", "duration": "約 40 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "巴"},
    {"href": "books/margin-of-safety/", "title": "Margin of Safety 概念導讀", "author": "Seth Klarman", "track": "價值投資", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "邊"},
    {"href": "books/random-walk/", "title": "漫步華爾街", "author": "Burton Malkiel", "track": "被動指數", "duration": "約 41 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "漫"},
    {"href": "books/investment-laws/", "title": "投資金律", "author": "William Bernstein", "track": "被動指數", "duration": "約 40 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "律"},
    {"href": "books/asset-allocation/", "title": "資產配置的藝術精華", "author": "David Darst 等", "track": "被動指數", "duration": "約 41 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "配"},
    {"href": "books/profit-first/", "title": "獲利優先", "author": "Mike Michalowicz", "track": "創業現金流", "duration": "約 41 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "利"},
    {"href": "books/lean-startup/", "title": "精實創業", "author": "Eric Ries", "track": "創業現金流", "duration": "約 41 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "精"},
    {"href": "books/small-biz-cashflow/", "title": "小型企業現金流實務導讀", "author": "實務概念導讀", "track": "創業現金流", "duration": "約 41 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "現"},
    {"href": "books/stock-market-genius/", "title": "你能成為股市天才", "author": "Joel Greenblatt", "track": "價值投資", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "你"},
    {"href": "books/greenwald-value-investing/", "title": "價值投資", "author": "Bruce Greenwald", "track": "價值投資", "duration": "約 38 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "價"},
    {"href": "books/one-up-wall-street/", "title": "彼得·林奇的成功投資", "author": "Peter Lynch", "track": "價值投資", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "彼"},
    {"href": "books/beating-the-street/", "title": "征服股海", "author": "Peter Lynch", "track": "價值投資", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "征"},
    {"href": "books/qiuguo-simplest-thing/", "title": "投資中最簡單的事", "author": "邱國鷺", "track": "價值投資", "duration": "約 41 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "投"},
    {"href": "books/little-book-beats-market/", "title": "神奇公式投資法", "author": "Joel Greenblatt", "track": "價值投資", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "神"},
    {"href": "books/five-rules-stock-investing/", "title": "股市真規則", "author": "Pat Dorsey", "track": "價值投資", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "股"},
    {"href": "books/little-book-builds-wealth/", "title": "護城河", "author": "Pat Dorsey", "track": "價值投資", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "護"},
    {"href": "books/contrarian-investment/", "title": "逆向投資策略", "author": "David Dreman", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "逆"},
    {"href": "books/global-asset-allocation/", "title": "全球資產配置", "author": "Meb Faber", "track": "被動指數", "duration": "約 38 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "全"},
    {"href": "books/bogle-mutual-funds/", "title": "共同基金必勝法則", "author": "John C. Bogle", "track": "被動指數", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "共"},
    {"href": "books/bogleheads-guide/", "title": "博格頭投資指南", "author": "Taylor Larimore 等", "track": "被動指數", "duration": "約 37 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "博"}
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
