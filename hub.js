(function () {
  const books = [
    {"href": "books/rich-dad-poor-dad/", "title": "窮爸爸富爸爸", "author": "Robert T. Kiyosaki", "track": "現金流 · 心態", "duration": "約 48 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "富"},
    {"href": "books/intelligent-investor/", "title": "智慧型股票投資人", "author": "Benjamin Graham", "track": "價值投資", "duration": "約 31 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "智"},
    {"href": "books/most-important-thing/", "title": "投資最重要的事", "author": "Howard Marks", "track": "風險 · 周期", "duration": "約 31 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "要"},
    {"href": "books/cashflow-quadrant/", "title": "富爸爸有錢有理", "author": "Robert T. Kiyosaki", "track": "現金流象限", "duration": "約 33 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "象", "voice": "minimax"},
    {"href": "books/psychology-of-money/", "title": "金錢心理學", "author": "Morgan Housel", "track": "被動指數 · 行為", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "心"},
    {"href": "books/bogle-index-funds/", "title": "指數基金的勝算", "author": "John C. Bogle", "track": "被動指數", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "指", "voice": "minimax"},
    {"href": "books/poor-charlies-almanack/", "title": "窮查理寶典", "author": "Charlie Munger", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "查"},
    {"href": "books/market-cycles/", "title": "周期", "author": "Howard Marks", "track": "價值投資 · 周期", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "周"},
    {"href": "books/rich-dad-guide/", "title": "富爸爸財務自由之路", "author": "Robert T. Kiyosaki", "track": "創業現金流", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "自"},
    {"href": "books/zero-to-one/", "title": "從0到1", "author": "Peter Thiel", "track": "創業現金流", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "0"},
    {"href": "books/security-analysis/", "title": "證券分析精華", "author": "Benjamin Graham", "track": "價值投資", "duration": "約 40 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "證"},
    {"href": "books/common-stocks/", "title": "普通股和不普通的利潤", "author": "Philip Fisher", "track": "價值投資", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "普", "voice": "minimax"},
    {"href": "books/buffett-letters/", "title": "巴菲特寫給股東的信選讀", "author": "Warren Buffett", "track": "價值投資", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "巴", "voice": "minimax"},
    {"href": "books/margin-of-safety/", "title": "Margin of Safety 概念導讀", "author": "Seth Klarman", "track": "價值投資", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "邊"},
    {"href": "books/random-walk/", "title": "漫步華爾街", "author": "Burton Malkiel", "track": "被動指數", "duration": "約 41 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "漫"},
    {"href": "books/investment-laws/", "title": "投資金律", "author": "William Bernstein", "track": "被動指數", "duration": "約 40 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "律"},
    {"href": "books/asset-allocation/", "title": "資產配置的藝術精華", "author": "David Darst 等", "track": "被動指數", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "配", "voice": "minimax"},
    {"href": "books/profit-first/", "title": "獲利優先", "author": "Mike Michalowicz", "track": "創業現金流", "duration": "約 41 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "利"},
    {"href": "books/lean-startup/", "title": "精實創業", "author": "Eric Ries", "track": "創業現金流", "duration": "約 41 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "精"},
    {"href": "books/small-biz-cashflow/", "title": "小型企業現金流實務導讀", "author": "實務概念導讀", "track": "創業現金流", "duration": "約 41 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "現"},
    {"href": "books/stock-market-genius/", "title": "你能成為股市天才", "author": "Joel Greenblatt", "track": "價值投資", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "你"},
    {"href": "books/greenwald-value-investing/", "title": "價值投資", "author": "Bruce Greenwald", "track": "價值投資", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "價", "voice": "minimax"},
    {"href": "books/one-up-wall-street/", "title": "彼得·林奇的成功投資", "author": "Peter Lynch", "track": "價值投資", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "彼"},
    {"href": "books/beating-the-street/", "title": "征服股海", "author": "Peter Lynch", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "征", "voice": "minimax"},
    {"href": "books/qiuguo-simplest-thing/", "title": "投資中最簡單的事", "author": "邱國鷺", "track": "價值投資", "duration": "約 41 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "投"},
    {"href": "books/little-book-beats-market/", "title": "神奇公式投資法", "author": "Joel Greenblatt", "track": "價值投資", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "神"},
    {"href": "books/five-rules-stock-investing/", "title": "股市真規則", "author": "Pat Dorsey", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "股", "voice": "minimax"},
    {"href": "books/little-book-builds-wealth/", "title": "護城河", "author": "Pat Dorsey", "track": "價值投資", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "護"},
    {"href": "books/contrarian-investment/", "title": "逆向投資策略", "author": "David Dreman", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "逆", "voice": "minimax"},
    {"href": "books/global-asset-allocation/", "title": "全球資產配置", "author": "Meb Faber", "track": "被動指數", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "全", "voice": "minimax"},
    {"href": "books/bogle-mutual-funds/", "title": "共同基金必勝法則", "author": "John C. Bogle", "track": "被動指數", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "共", "voice": "minimax"},
    {"href": "books/bogleheads-guide/", "title": "博格頭投資指南", "author": "Taylor Larimore 等", "track": "被動指數", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "博", "voice": "minimax"},
    {"href": "books/ivy-portfolio/", "title": "常春藤投資組合", "author": "Meb Faber", "track": "被動指數", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "常"},
    {"href": "books/simple-path-wealth/", "title": "財富的簡單法則", "author": "JL Collins", "track": "被動指數", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "財"},
    {"href": "books/bernstein-asset-allocation/", "title": "資產配置投資策略", "author": "William J. Bernstein", "track": "被動指數", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "資", "voice": "minimax"},
    {"href": "books/your-money-your-brain/", "title": "你的錢，你的腦", "author": "Jason Zweig", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "你"},
    {"href": "books/antifragile/", "title": "反脆弱", "author": "Nassim Nicholas Taleb", "track": "行為 · 心理", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "反", "voice": "minimax"},
    {"href": "books/thinking-fast-slow/", "title": "快思慢想", "author": "Daniel Kahneman", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "快"},
    {"href": "books/scarcity/", "title": "稀缺", "author": "Sendhil Mullainathan / Eldar Shafir", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "稀"},
    {"href": "books/behavior-gap/", "title": "行為差距", "author": "Carl Richards", "track": "行為 · 心理", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "行", "voice": "minimax"},
    {"href": "books/behavioral-investor/", "title": "行為投資人", "author": "Daniel Crosby", "track": "行為 · 心理", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "行", "voice": "minimax"},
    {"href": "books/misbehaving/", "title": "錯誤的行為", "author": "Richard H. Thaler", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "錯"},
    {"href": "books/fooled-by-randomness/", "title": "隨機漫步的傻瓜", "author": "Nassim Nicholas Taleb", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "隨", "voice": "minimax"},
    {"href": "books/black-swan/", "title": "黑天鵝", "author": "Nassim Nicholas Taleb", "track": "行為 · 心理", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "黑", "voice": "minimax"},
    {"href": "books/pumpkin-plan/", "title": "南瓜計畫", "author": "Mike Michalowicz", "track": "創業現金流", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "南"},
    {"href": "books/clockwork/", "title": "時鐘機制", "author": "Mike Michalowicz", "track": "創業現金流", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "時", "voice": "minimax"},
    {"href": "books/business-model-generation/", "title": "獲利世代", "author": "Alexander Osterwalder", "track": "創業現金流", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "獲", "voice": "minimax"},
    {"href": "books/principles-dalio/", "title": "原則", "author": "Ray Dalio", "track": "宏觀 · 周期", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "原"},
    {"href": "books/big-debt-crises/", "title": "大債危機", "author": "Ray Dalio", "track": "宏觀 · 周期", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "大", "voice": "minimax"},
    {"href": "books/big-short/", "title": "大空頭", "author": "Michael Lewis", "track": "宏觀 · 周期", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "大", "voice": "minimax"},
    {"href": "books/devil-take-hindmost/", "title": "泡沫的故事", "author": "Edward Chancellor", "track": "宏觀 · 周期", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "泡", "voice": "minimax"},
    {"href": "books/how-economic-machine-works/", "title": "經濟機器如何運作", "author": "Ray Dalio", "track": "宏觀 · 周期", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "經"},
    {"href": "books/alchemists-fed/", "title": "聯準會", "author": "Neil Irwin", "track": "宏觀 · 周期", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "聯", "voice": "minimax"},
    {"href": "books/ascent-of-money/", "title": "貨幣崛起", "author": "Niall Ferguson", "track": "宏觀 · 周期", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "貨", "voice": "minimax"},
    {"href": "books/capital-ideas/", "title": "資本觀念", "author": "Peter L. Bernstein", "track": "宏觀 · 周期", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "資", "voice": "minimax"},
    {"href": "books/this-time-is-different/", "title": "這次不一樣", "author": "Carmen M. Reinhart / Kenneth S. Rogoff", "track": "宏觀 · 周期", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "這"},
    {"href": "books/narrative-and-numbers/", "title": "估值的故事與數字", "author": "Aswath Damodaran", "track": "財報 · 估值", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "估"},
    {"href": "books/buffettology-statements/", "title": "巴菲特教你讀財報", "author": "Mary Buffett / David Clark", "track": "財報 · 估值", "duration": "約 35 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "巴", "voice": "minimax"},
    {"href": "books/damodaran-valuation/", "title": "投資估價", "author": "Aswath Damodaran", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "投", "voice": "minimax"},
    {"href": "books/accounting-game/", "title": "會計遊戲", "author": "Darrell Mullis / Judith Orloff", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "會", "voice": "minimax"},
    {"href": "books/quality-of-earnings/", "title": "盈餘品質", "author": "Thornton L. O'Glove", "track": "財報 · 估值", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "盈"},
    {"href": "books/free-cash-flow-investing/", "title": "自由現金流投資法", "author": "Aswath Damodaran", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "自", "voice": "minimax"},
    {"href": "books/financial-intelligence/", "title": "財務智商", "author": "Karen Berman / Joe Knight", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "財", "voice": "minimax"},
    {"href": "books/financial-statements-story/", "title": "財報就像一本故事書", "author": "劉順仁", "track": "財報 · 估值", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "財", "voice": "minimax"},
    {"href": "books/finlab-stock-picking/", "title": "財報狗教你挖好股", "author": "財報狗", "track": "財報 · 估值", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "財", "voice": "minimax"},
    {"href": "books/financial-shenanigans/", "title": "財報魔術", "author": "Howard Schilit", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "財", "voice": "minimax"},
    {"href": "books/brrrr-method/", "title": "BRRRR 投資法", "author": "David Greene", "track": "房地產", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "B", "voice": "minimax"},
    {"href": "books/reits-investors-guide/", "title": "REITs 投資指南", "author": "Stephanie Krewson-Kelly / Brad Thomas", "track": "房地產", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "R"},
    {"href": "books/book-on-rental-property/", "title": "出租物業投資聖經", "author": "Brandon Turner", "track": "房地產", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "出", "voice": "minimax"},
    {"href": "books/commercial-real-estate-101/", "title": "商業地產入門", "author": "相關實務書", "track": "房地產", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "商", "voice": "minimax"},
    {"href": "books/rich-dad-real-estate/", "title": "富爸爸不動產投資", "author": "Robert Kiyosaki 編", "track": "房地產", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "富"},
    {"href": "books/what-every-re-investor/", "title": "現金流與不動產數字", "author": "Frank Gallinelli", "track": "房地產", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "現"},
    {"href": "books/millionaire-real-estate-investor/", "title": "百萬富翁房地產投資人", "author": "Gary Keller", "track": "房地產", "duration": "約 32 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "百"},
    {"href": "books/hk-property-investing/", "title": "香港物業投資思維", "author": "港人理財常見主題", "track": "房地產", "duration": "約 40 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "香"},
    {"href": "books/trading-for-living/", "title": "以交易為生", "author": "Alexander Elder", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "以"},
    {"href": "books/market-wizards/", "title": "市場奇才", "author": "Jack D. Schwager", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "市"},
    {"href": "books/way-of-turtle/", "title": "海龜投資法則", "author": "Curtis Faith", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "海"},
    {"href": "books/reminiscences-stock-operator/", "title": "股票作手回憶錄", "author": "Edwin Lefèvre", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "股"},
    {"href": "books/trend-following/", "title": "趨勢跟隨", "author": "Michael W. Covel", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "趨"},
    {"href": "books/quantitative-trading/", "title": "量化交易", "author": "Ernest P. Chan", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "量"},
    {"href": "books/technical-analysis-markets/", "title": "金融市場技術分析", "author": "John J. Murphy", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "金"},
    {"href": "books/japanese-candlestick/", "title": "陰線陽線", "author": "Steve Nison", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "陰"},
    {"href": "books/everything-store/", "title": "一切商店", "author": "Brad Stone", "track": "創業家傳記", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "一", "voice": "minimax"},
    {"href": "books/creativity-inc/", "title": "創意公司", "author": "Ed Catmull", "track": "創業家傳記", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "創", "voice": "minimax"},
    {"href": "books/hard-thing-about-hard-things/", "title": "創業維艱", "author": "Ben Horowitz", "track": "創業家傳記", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "創", "voice": "minimax"},
    {"href": "books/built-to-last/", "title": "基業長青", "author": "Jim Collins / Jerry Porras", "track": "創業家傳記", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "基", "voice": "minimax"},
    {"href": "books/good-to-great/", "title": "從優秀到卓越", "author": "Jim Collins", "track": "創業家傳記", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "從", "voice": "minimax"},
    {"href": "books/snowball-buffett/", "title": "滾雪球", "author": "Alice Schroeder", "track": "創業家傳記", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "滾"},
    {"href": "books/invent-and-wander/", "title": "發明與遊蕩", "author": "Jeff Bezos", "track": "創業家傳記", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "發"},
    {"href": "books/steve-jobs/", "title": "賈伯斯傳", "author": "Walter Isaacson", "track": "創業家傳記", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "賈"},
    {"href": "books/shoe-dog/", "title": "鞋狗", "author": "Phil Knight", "track": "創業家傳記", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "鞋"},
    {"href": "books/elon-musk/", "title": "馬斯克傳", "author": "Walter Isaacson", "track": "創業家傳記", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "馬", "voice": "minimax"},
    {"href": "books/etf-playbook/", "title": "ETF 實戰手冊", "author": "台港作者常見", "track": "港台常見理財書", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "E", "voice": "minimax"},
    {"href": "books/increase-financial-iq/", "title": "富爸爸提高你的財商", "author": "Robert T. Kiyosaki", "track": "港台常見理財書", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "富"},
    {"href": "books/secrets-millionaire-mind/", "title": "有錢人想的和你不一樣", "author": "T. Harv Eker", "track": "港台常見理財書", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "有"},
    {"href": "books/die-with-zero/", "title": "歸零而死", "author": "Bill Perkins", "track": "港台常見理財書", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "歸", "voice": "minimax"},
    {"href": "books/greenhorn-fund-bible/", "title": "綠角的基金勝經", "author": "綠角", "track": "港台常見理財書", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "綠", "voice": "minimax"},
    {"href": "books/gupiaolaoniu-dividend/", "title": "股海老牛的存股課", "author": "股海老牛", "track": "港台常見理財書", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "股", "voice": "minimax"},
    {"href": "books/i-will-teach-you-rich/", "title": "自動致富", "author": "Ramit Sethi", "track": "港台常見理財書", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "自"},
    {"href": "books/compound-effect/", "title": "複利效應", "author": "Darren Hardy", "track": "港台常見理財書", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "複", "voice": "minimax"},
    {"href": "books/your-money-or-your-life/", "title": "金錢或人生", "author": "Vicki Robin / Joe Dominguez", "track": "港台常見理財書", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "金"},
    {"href": "books/hk-mpf-investing/", "title": "香港人強積金與投資入門", "author": "港人作者常見", "track": "港台常見理財書", "duration": "約 40 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "香"},
    {"href": "books/naval-almanack/", "title": "納瓦爾寶典", "author": "Eric Jorgenson / Naval Ravikant", "track": "創業 · 心態 · 財富", "duration": "約 47 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "納"}
  ];

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

})();
