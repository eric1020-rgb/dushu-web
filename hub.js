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
    {"href": "books/bogleheads-guide/", "title": "博格頭投資指南", "author": "Taylor Larimore 等", "track": "被動指數", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "博"},
    {"href": "books/ivy-portfolio/", "title": "常春藤投資組合", "author": "Meb Faber", "track": "被動指數", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "常"},
    {"href": "books/simple-path-wealth/", "title": "財富的簡單法則", "author": "JL Collins", "track": "被動指數", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "財"},
    {"href": "books/bernstein-asset-allocation/", "title": "資產配置投資策略", "author": "William J. Bernstein", "track": "被動指數", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "資"},
    {"href": "books/your-money-your-brain/", "title": "你的錢，你的腦", "author": "Jason Zweig", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "你"},
    {"href": "books/antifragile/", "title": "反脆弱", "author": "Nassim Nicholas Taleb", "track": "行為 · 心理", "duration": "約 41 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "反"},
    {"href": "books/thinking-fast-slow/", "title": "快思慢想", "author": "Daniel Kahneman", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "快"},
    {"href": "books/scarcity/", "title": "稀缺", "author": "Sendhil Mullainathan / Eldar Shafir", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "稀"},
    {"href": "books/behavior-gap/", "title": "行為差距", "author": "Carl Richards", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "行"},
    {"href": "books/behavioral-investor/", "title": "行為投資人", "author": "Daniel Crosby", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "行"},
    {"href": "books/misbehaving/", "title": "錯誤的行為", "author": "Richard H. Thaler", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "錯"},
    {"href": "books/fooled-by-randomness/", "title": "隨機漫步的傻瓜", "author": "Nassim Nicholas Taleb", "track": "行為 · 心理", "duration": "約 41 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "隨"},
    {"href": "books/black-swan/", "title": "黑天鵝", "author": "Nassim Nicholas Taleb", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "黑"},
    {"href": "books/pumpkin-plan/", "title": "南瓜計畫", "author": "Mike Michalowicz", "track": "創業現金流", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "南"},
    {"href": "books/clockwork/", "title": "時鐘機制", "author": "Mike Michalowicz", "track": "創業現金流", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "時"},
    {"href": "books/business-model-generation/", "title": "獲利世代", "author": "Alexander Osterwalder", "track": "創業現金流", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "獲"},
    {"href": "books/principles-dalio/", "title": "原則", "author": "Ray Dalio", "track": "宏觀 · 周期", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "原"},
    {"href": "books/big-debt-crises/", "title": "大債危機", "author": "Ray Dalio", "track": "宏觀 · 周期", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "大"},
    {"href": "books/big-short/", "title": "大空頭", "author": "Michael Lewis", "track": "宏觀 · 周期", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "大"},
    {"href": "books/devil-take-hindmost/", "title": "泡沫的故事", "author": "Edward Chancellor", "track": "宏觀 · 周期", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "泡"},
    {"href": "books/how-economic-machine-works/", "title": "經濟機器如何運作", "author": "Ray Dalio", "track": "宏觀 · 周期", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "經"},
    {"href": "books/alchemists-fed/", "title": "聯準會", "author": "Neil Irwin", "track": "宏觀 · 周期", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "聯"},
    {"href": "books/ascent-of-money/", "title": "貨幣崛起", "author": "Niall Ferguson", "track": "宏觀 · 周期", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "貨"},
    {"href": "books/capital-ideas/", "title": "資本觀念", "author": "Peter L. Bernstein", "track": "宏觀 · 周期", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "資"},
    {"href": "books/this-time-is-different/", "title": "這次不一樣", "author": "Carmen M. Reinhart / Kenneth S. Rogoff", "track": "宏觀 · 周期", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "這"},
    {"href": "books/narrative-and-numbers/", "title": "估值的故事與數字", "author": "Aswath Damodaran", "track": "財報 · 估值", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "估"},
    {"href": "books/buffettology-statements/", "title": "巴菲特教你讀財報", "author": "Mary Buffett / David Clark", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "巴"},
    {"href": "books/damodaran-valuation/", "title": "投資估價", "author": "Aswath Damodaran", "track": "財報 · 估值", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "投"},
    {"href": "books/accounting-game/", "title": "會計遊戲", "author": "Darrell Mullis / Judith Orloff", "track": "財報 · 估值", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "會"},
    {"href": "books/quality-of-earnings/", "title": "盈餘品質", "author": "Thornton L. O'Glove", "track": "財報 · 估值", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "盈"},
    {"href": "books/free-cash-flow-investing/", "title": "自由現金流投資法", "author": "Aswath Damodaran", "track": "財報 · 估值", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "自"},
    {"href": "books/financial-intelligence/", "title": "財務智商", "author": "Karen Berman / Joe Knight", "track": "財報 · 估值", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "財"},
    {"href": "books/financial-statements-story/", "title": "財報就像一本故事書", "author": "劉順仁", "track": "財報 · 估值", "duration": "約 40 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "財"},
    {"href": "books/finlab-stock-picking/", "title": "財報狗教你挖好股", "author": "財報狗", "track": "財報 · 估值", "duration": "約 41 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "財"},
    {"href": "books/financial-shenanigans/", "title": "財報魔術", "author": "Howard Schilit", "track": "財報 · 估值", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "財"},
    {"href": "books/brrrr-method/", "title": "BRRRR 投資法", "author": "David Greene", "track": "房地產", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "B"},
    {"href": "books/reits-investors-guide/", "title": "REITs 投資指南", "author": "Stephanie Krewson-Kelly / Brad Thomas", "track": "房地產", "duration": "約 37 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "R"},
    {"href": "books/book-on-rental-property/", "title": "出租物業投資聖經", "author": "Brandon Turner", "track": "房地產", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "出"},
    {"href": "books/commercial-real-estate-101/", "title": "商業地產入門", "author": "相關實務書", "track": "房地產", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "商"},
    {"href": "books/rich-dad-real-estate/", "title": "富爸爸不動產投資", "author": "Robert Kiyosaki 編", "track": "房地產", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "富"},
    {"href": "books/what-every-re-investor/", "title": "現金流與不動產數字", "author": "Frank Gallinelli", "track": "房地產", "duration": "約 37 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "現"},
    {"href": "books/millionaire-real-estate-investor/", "title": "百萬富翁房地產投資人", "author": "Gary Keller", "track": "房地產", "duration": "約 32 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "百"},
    {"href": "books/hk-property-investing/", "title": "香港物業投資思維", "author": "港人理財常見主題", "track": "房地產", "duration": "約 40 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "香"},
    {"href": "books/trading-for-living/", "title": "以交易為生", "author": "Alexander Elder", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "以"},
    {"href": "books/market-wizards/", "title": "市場奇才", "author": "Jack D. Schwager", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "市"},
    {"href": "books/way-of-turtle/", "title": "海龜投資法則", "author": "Curtis Faith", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "海"},
    {"href": "books/reminiscences-stock-operator/", "title": "股票作手回憶錄", "author": "Edwin Lefèvre", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "股"},
    {"href": "books/trend-following/", "title": "趨勢跟隨", "author": "Michael W. Covel", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "趨"},
    {"href": "books/quantitative-trading/", "title": "量化交易", "author": "Ernest P. Chan", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "量"},
    {"href": "books/technical-analysis-markets/", "title": "金融市場技術分析", "author": "John J. Murphy", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "金"},
    {"href": "books/japanese-candlestick/", "title": "陰線陽線", "author": "Steve Nison", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "陰"},
    {"href": "books/everything-store/", "title": "一切商店", "author": "Brad Stone", "track": "創業家傳記", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "一"},
    {"href": "books/creativity-inc/", "title": "創意公司", "author": "Ed Catmull", "track": "創業家傳記", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c4", "mark": "創"},
    {"href": "books/hard-thing-about-hard-things/", "title": "創業維艱", "author": "Ben Horowitz", "track": "創業家傳記", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c1", "mark": "創"},
    {"href": "books/built-to-last/", "title": "基業長青", "author": "Jim Collins / Jerry Porras", "track": "創業家傳記", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c2", "mark": "基"},
    {"href": "books/good-to-great/", "title": "從優秀到卓越", "author": "Jim Collins", "track": "創業家傳記", "duration": "約 39 分鐘", "chapters": "9 章", "coverClass": "c3", "mark": "從"}
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
