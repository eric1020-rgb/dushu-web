(function () {
  const books = [
    {"href": "books/rich-dad-poor-dad/", "title": "窮爸爸富爸爸", "author": "Robert T. Kiyosaki", "track": "現金流 · 心態", "duration": "約 46 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "富", "voice": "minimax"},
    {"href": "books/intelligent-investor/", "title": "智慧型股票投資人", "author": "Benjamin Graham", "track": "價值投資", "duration": "約 30 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "智", "voice": "minimax"},
    {"href": "books/most-important-thing/", "title": "投資最重要的事", "author": "Howard Marks", "track": "風險 · 周期", "duration": "約 31 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "要", "voice": "minimax"},
    {"href": "books/cashflow-quadrant/", "title": "富爸爸有錢有理", "author": "Robert T. Kiyosaki", "track": "現金流象限", "duration": "約 33 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "象", "voice": "minimax"},
    {"href": "books/psychology-of-money/", "title": "金錢心理學", "author": "Morgan Housel", "track": "被動指數 · 行為", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "心", "voice": "minimax"},
    {"href": "books/bogle-index-funds/", "title": "指數基金的勝算", "author": "John C. Bogle", "track": "被動指數", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "指", "voice": "minimax"},
    {"href": "books/poor-charlies-almanack/", "title": "窮查理寶典", "author": "Charlie Munger", "track": "價值投資", "duration": "約 35 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "查", "voice": "minimax"},
    {"href": "books/market-cycles/", "title": "周期", "author": "Howard Marks", "track": "價值投資 · 周期", "duration": "約 35 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "周", "voice": "minimax"},
    {"href": "books/rich-dad-guide/", "title": "富爸爸財務自由之路", "author": "Robert T. Kiyosaki", "track": "創業現金流", "duration": "約 35 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "自", "voice": "minimax"},
    {"href": "books/zero-to-one/", "title": "從0到1", "author": "Peter Thiel", "track": "創業現金流", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "0"},
    {"href": "books/security-analysis/", "title": "證券分析精華", "author": "Benjamin Graham", "track": "價值投資", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "證", "voice": "minimax"},
    {"href": "books/common-stocks/", "title": "普通股和不普通的利潤", "author": "Philip Fisher", "track": "價值投資", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "普", "voice": "minimax"},
    {"href": "books/buffett-letters/", "title": "巴菲特寫給股東的信選讀", "author": "Warren Buffett", "track": "價值投資", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "巴", "voice": "minimax"},
    {"href": "books/margin-of-safety/", "title": "Margin of Safety 概念導讀", "author": "Seth Klarman", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "邊", "voice": "minimax"},
    {"href": "books/random-walk/", "title": "漫步華爾街", "author": "Burton Malkiel", "track": "被動指數", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "漫", "voice": "minimax"},
    {"href": "books/investment-laws/", "title": "投資金律", "author": "William Bernstein", "track": "被動指數", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "律", "voice": "minimax"},
    {"href": "books/asset-allocation/", "title": "資產配置的藝術精華", "author": "David Darst 等", "track": "被動指數", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "配", "voice": "minimax"},
    {"href": "books/profit-first/", "title": "獲利優先", "author": "Mike Michalowicz", "track": "創業現金流", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "利", "voice": "minimax"},
    {"href": "books/lean-startup/", "title": "精實創業", "author": "Eric Ries", "track": "創業現金流", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "精", "voice": "minimax"},
    {"href": "books/small-biz-cashflow/", "title": "小型企業現金流實務導讀", "author": "實務概念導讀", "track": "創業現金流", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "現", "voice": "minimax"},
    {"href": "books/stock-market-genius/", "title": "你能成為股市天才", "author": "Joel Greenblatt", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "你", "voice": "minimax"},
    {"href": "books/greenwald-value-investing/", "title": "價值投資", "author": "Bruce Greenwald", "track": "價值投資", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "價", "voice": "minimax"},
    {"href": "books/one-up-wall-street/", "title": "彼得·林奇的成功投資", "author": "Peter Lynch", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "彼", "voice": "minimax"},
    {"href": "books/beating-the-street/", "title": "征服股海", "author": "Peter Lynch", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "征", "voice": "minimax"},
    {"href": "books/qiuguo-simplest-thing/", "title": "投資中最簡單的事", "author": "邱國鷺", "track": "價值投資", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "投", "voice": "minimax"},
    {"href": "books/little-book-beats-market/", "title": "神奇公式投資法", "author": "Joel Greenblatt", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "神", "voice": "minimax"},
    {"href": "books/five-rules-stock-investing/", "title": "股市真規則", "author": "Pat Dorsey", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "股", "voice": "minimax"},
    {"href": "books/little-book-builds-wealth/", "title": "護城河", "author": "Pat Dorsey", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "護", "voice": "minimax"},
    {"href": "books/contrarian-investment/", "title": "逆向投資策略", "author": "David Dreman", "track": "價值投資", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "逆", "voice": "minimax"},
    {"href": "books/global-asset-allocation/", "title": "全球資產配置", "author": "Meb Faber", "track": "被動指數", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "全", "voice": "minimax"},
    {"href": "books/bogle-mutual-funds/", "title": "共同基金必勝法則", "author": "John C. Bogle", "track": "被動指數", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "共", "voice": "minimax"},
    {"href": "books/bogleheads-guide/", "title": "博格頭投資指南", "author": "Taylor Larimore 等", "track": "被動指數", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "博", "voice": "minimax"},
    {"href": "books/ivy-portfolio/", "title": "常春藤投資組合", "author": "Meb Faber", "track": "被動指數", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "常", "voice": "minimax"},
    {"href": "books/simple-path-wealth/", "title": "財富的簡單法則", "author": "JL Collins", "track": "被動指數", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "財", "voice": "minimax"},
    {"href": "books/bernstein-asset-allocation/", "title": "資產配置投資策略", "author": "William J. Bernstein", "track": "被動指數", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "資", "voice": "minimax"},
    {"href": "books/your-money-your-brain/", "title": "你的錢，你的腦", "author": "Jason Zweig", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "你"},
    {"href": "books/antifragile/", "title": "反脆弱", "author": "Nassim Nicholas Taleb", "track": "行為 · 心理", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "反", "voice": "minimax"},
    {"href": "books/thinking-fast-slow/", "title": "快思慢想", "author": "Daniel Kahneman", "track": "行為 · 心理", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "快", "voice": "minimax"},
    {"href": "books/scarcity/", "title": "稀缺", "author": "Sendhil Mullainathan / Eldar Shafir", "track": "行為 · 心理", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "稀", "voice": "minimax"},
    {"href": "books/behavior-gap/", "title": "行為差距", "author": "Carl Richards", "track": "行為 · 心理", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "行", "voice": "minimax"},
    {"href": "books/behavioral-investor/", "title": "行為投資人", "author": "Daniel Crosby", "track": "行為 · 心理", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "行", "voice": "minimax"},
    {"href": "books/misbehaving/", "title": "錯誤的行為", "author": "Richard H. Thaler", "track": "行為 · 心理", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "錯", "voice": "minimax"},
    {"href": "books/fooled-by-randomness/", "title": "隨機漫步的傻瓜", "author": "Nassim Nicholas Taleb", "track": "行為 · 心理", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "隨", "voice": "minimax"},
    {"href": "books/black-swan/", "title": "黑天鵝", "author": "Nassim Nicholas Taleb", "track": "行為 · 心理", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "黑", "voice": "minimax"},
    {"href": "books/pumpkin-plan/", "title": "南瓜計畫", "author": "Mike Michalowicz", "track": "創業現金流", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "南", "voice": "minimax"},
    {"href": "books/clockwork/", "title": "時鐘機制", "author": "Mike Michalowicz", "track": "創業現金流", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "時", "voice": "minimax"},
    {"href": "books/business-model-generation/", "title": "獲利世代", "author": "Alexander Osterwalder", "track": "創業現金流", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "獲", "voice": "minimax"},
    {"href": "books/principles-dalio/", "title": "原則", "author": "Ray Dalio", "track": "宏觀 · 周期", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "原", "voice": "minimax"},
    {"href": "books/big-debt-crises/", "title": "大債危機", "author": "Ray Dalio", "track": "宏觀 · 周期", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "大", "voice": "minimax"},
    {"href": "books/big-short/", "title": "大空頭", "author": "Michael Lewis", "track": "宏觀 · 周期", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "大", "voice": "minimax"},
    {"href": "books/devil-take-hindmost/", "title": "泡沫的故事", "author": "Edward Chancellor", "track": "宏觀 · 周期", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "泡", "voice": "minimax"},
    {"href": "books/how-economic-machine-works/", "title": "經濟機器如何運作", "author": "Ray Dalio", "track": "宏觀 · 周期", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "經", "voice": "minimax"},
    {"href": "books/alchemists-fed/", "title": "聯準會", "author": "Neil Irwin", "track": "宏觀 · 周期", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "聯", "voice": "minimax"},
    {"href": "books/ascent-of-money/", "title": "貨幣崛起", "author": "Niall Ferguson", "track": "宏觀 · 周期", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "貨", "voice": "minimax"},
    {"href": "books/capital-ideas/", "title": "資本觀念", "author": "Peter L. Bernstein", "track": "宏觀 · 周期", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "資", "voice": "minimax"},
    {"href": "books/this-time-is-different/", "title": "這次不一樣", "author": "Carmen M. Reinhart / Kenneth S. Rogoff", "track": "宏觀 · 周期", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "這", "voice": "minimax"},
    {"href": "books/narrative-and-numbers/", "title": "估值的故事與數字", "author": "Aswath Damodaran", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "估", "voice": "minimax"},
    {"href": "books/buffettology-statements/", "title": "巴菲特教你讀財報", "author": "Mary Buffett / David Clark", "track": "財報 · 估值", "duration": "約 35 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "巴", "voice": "minimax"},
    {"href": "books/damodaran-valuation/", "title": "投資估價", "author": "Aswath Damodaran", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "投", "voice": "minimax"},
    {"href": "books/accounting-game/", "title": "會計遊戲", "author": "Darrell Mullis / Judith Orloff", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "會", "voice": "minimax"},
    {"href": "books/quality-of-earnings/", "title": "盈餘品質", "author": "Thornton L. O'Glove", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "盈", "voice": "minimax"},
    {"href": "books/free-cash-flow-investing/", "title": "自由現金流投資法", "author": "Aswath Damodaran", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "自", "voice": "minimax"},
    {"href": "books/financial-intelligence/", "title": "財務智商", "author": "Karen Berman / Joe Knight", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "財", "voice": "minimax"},
    {"href": "books/financial-statements-story/", "title": "財報就像一本故事書", "author": "劉順仁", "track": "財報 · 估值", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "財", "voice": "minimax"},
    {"href": "books/finlab-stock-picking/", "title": "財報狗教你挖好股", "author": "財報狗", "track": "財報 · 估值", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "財", "voice": "minimax"},
    {"href": "books/financial-shenanigans/", "title": "財報魔術", "author": "Howard Schilit", "track": "財報 · 估值", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "財", "voice": "minimax"},
    {"href": "books/brrrr-method/", "title": "BRRRR 投資法", "author": "David Greene", "track": "房地產", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "B", "voice": "minimax"},
    {"href": "books/reits-investors-guide/", "title": "REITs 投資指南", "author": "Stephanie Krewson-Kelly / Brad Thomas", "track": "房地產", "duration": "約 35 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "R", "voice": "minimax"},
    {"href": "books/book-on-rental-property/", "title": "出租物業投資聖經", "author": "Brandon Turner", "track": "房地產", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "出", "voice": "minimax"},
    {"href": "books/commercial-real-estate-101/", "title": "商業地產入門", "author": "相關實務書", "track": "房地產", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "商", "voice": "minimax"},
    {"href": "books/rich-dad-real-estate/", "title": "富爸爸不動產投資", "author": "Robert Kiyosaki 編", "track": "房地產", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "富", "voice": "minimax"},
    {"href": "books/what-every-re-investor/", "title": "現金流與不動產數字", "author": "Frank Gallinelli", "track": "房地產", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "現"},
    {"href": "books/millionaire-real-estate-investor/", "title": "百萬富翁房地產投資人", "author": "Gary Keller", "track": "房地產", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "百", "voice": "minimax"},
    {"href": "books/hk-property-investing/", "title": "香港物業投資思維", "author": "港人理財常見主題", "track": "房地產", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "香", "voice": "minimax"},
    {"href": "books/trading-for-living/", "title": "以交易為生", "author": "Alexander Elder", "track": "交易 · 技術", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "以", "voice": "minimax"},
    {"href": "books/market-wizards/", "title": "市場奇才", "author": "Jack D. Schwager", "track": "交易 · 技術", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "市", "voice": "minimax"},
    {"href": "books/way-of-turtle/", "title": "海龜投資法則", "author": "Curtis Faith", "track": "交易 · 技術", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "海"},
    {"href": "books/reminiscences-stock-operator/", "title": "股票作手回憶錄", "author": "Edwin Lefèvre", "track": "交易 · 技術", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "股", "voice": "minimax"},
    {"href": "books/trend-following/", "title": "趨勢跟隨", "author": "Michael W. Covel", "track": "交易 · 技術", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "趨", "voice": "minimax"},
    {"href": "books/quantitative-trading/", "title": "量化交易", "author": "Ernest P. Chan", "track": "交易 · 技術", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "量", "voice": "minimax"},
    {"href": "books/technical-analysis-markets/", "title": "金融市場技術分析", "author": "John J. Murphy", "track": "交易 · 技術", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "金", "voice": "minimax"},
    {"href": "books/japanese-candlestick/", "title": "陰線陽線", "author": "Steve Nison", "track": "交易 · 技術", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "陰", "voice": "minimax"},
    {"href": "books/everything-store/", "title": "一切商店", "author": "Brad Stone", "track": "創業家傳記", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "一", "voice": "minimax"},
    {"href": "books/creativity-inc/", "title": "創意公司", "author": "Ed Catmull", "track": "創業家傳記", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "創", "voice": "minimax"},
    {"href": "books/hard-thing-about-hard-things/", "title": "創業維艱", "author": "Ben Horowitz", "track": "創業家傳記", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "創", "voice": "minimax"},
    {"href": "books/built-to-last/", "title": "基業長青", "author": "Jim Collins / Jerry Porras", "track": "創業家傳記", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "基", "voice": "minimax"},
    {"href": "books/good-to-great/", "title": "從優秀到卓越", "author": "Jim Collins", "track": "創業家傳記", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "從", "voice": "minimax"},
    {"href": "books/snowball-buffett/", "title": "滾雪球", "author": "Alice Schroeder", "track": "創業家傳記", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "滾", "voice": "minimax"},
    {"href": "books/invent-and-wander/", "title": "發明與遊蕩", "author": "Jeff Bezos", "track": "創業家傳記", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "發", "voice": "minimax"},
    {"href": "books/steve-jobs/", "title": "賈伯斯傳", "author": "Walter Isaacson", "track": "創業家傳記", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "賈", "voice": "minimax"},
    {"href": "books/shoe-dog/", "title": "鞋狗", "author": "Phil Knight", "track": "創業家傳記", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "鞋", "voice": "minimax"},
    {"href": "books/elon-musk/", "title": "馬斯克傳", "author": "Walter Isaacson", "track": "創業家傳記", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "馬", "voice": "minimax"},
    {"href": "books/etf-playbook/", "title": "ETF 實戰手冊", "author": "台港作者常見", "track": "港台常見理財書", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "E", "voice": "minimax"},
    {"href": "books/increase-financial-iq/", "title": "富爸爸提高你的財商", "author": "Robert T. Kiyosaki", "track": "港台常見理財書", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "富", "voice": "minimax"},
    {"href": "books/secrets-millionaire-mind/", "title": "有錢人想的和你不一樣", "author": "T. Harv Eker", "track": "港台常見理財書", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "有", "voice": "minimax"},
    {"href": "books/die-with-zero/", "title": "歸零而死", "author": "Bill Perkins", "track": "港台常見理財書", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "歸", "voice": "minimax"},
    {"href": "books/greenhorn-fund-bible/", "title": "綠角的基金勝經", "author": "綠角", "track": "港台常見理財書", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "綠", "voice": "minimax"},
    {"href": "books/gupiaolaoniu-dividend/", "title": "股海老牛的存股課", "author": "股海老牛", "track": "港台常見理財書", "duration": "約 38 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "股", "voice": "minimax"},
    {"href": "books/i-will-teach-you-rich/", "title": "自動致富", "author": "Ramit Sethi", "track": "港台常見理財書", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "自", "voice": "minimax"},
    {"href": "books/compound-effect/", "title": "複利效應", "author": "Darren Hardy", "track": "港台常見理財書", "duration": "約 36 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "複", "voice": "minimax"},
    {"href": "books/your-money-or-your-life/", "title": "金錢或人生", "author": "Vicki Robin / Joe Dominguez", "track": "港台常見理財書", "duration": "約 39 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "金"},
    {"href": "books/hk-mpf-investing/", "title": "香港人強積金與投資入門", "author": "港人作者常見", "track": "港台常見理財書", "duration": "約 37 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "香", "voice": "minimax"},
    {"href": "books/long-wallet/", "title": "為什麼有錢人都用長銀包", "author": "龜田潤一郎", "track": "金錢習慣 · 心態", "duration": "約 43 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "銀"},
    {"href": "books/why-we-sleep/", "title": "為什麼要睡覺", "author": "Matthew Walker", "track": "健康 · 表現 · 科學", "duration": "約 35 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "睡"},
    {"href": "books/millionaire-next-door/", "title": "原來有錢人都這麼做", "author": "Thomas J. Stanley / William D. Danko", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "鄰"},
    {"href": "books/millionaire-mind/", "title": "百萬富翁的思維", "author": "Thomas J. Stanley", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "思"},
    {"href": "books/next-millionaire-next-door/", "title": "下一個住在你家隔壁的百萬富翁", "author": "Thomas J. Stanley / Sarah Stanley Fallaw", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "鄰"},
    {"href": "books/what-rich-know/", "title": "有錢人在乎的和你不一樣", "author": "Keith Cameron Smith", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "在"},
    {"href": "books/rich-habits/", "title": "習慣致富", "author": "Thomas C. Corley", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "習"},
    {"href": "books/change-habits-change-life/", "title": "改變習慣，改變人生（暫譯）", "author": "Thomas C. Corley", "track": "金錢習慣 · 心態", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "改", "voice": "minimax"},
    {"href": "books/richest-man-babylon/", "title": "巴比倫富翁的理財課", "author": "George S. Clason", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "巴"},
    {"href": "books/think-grow-rich/", "title": "思考致富", "author": "Napoleon Hill", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "思"},
    {"href": "books/science-getting-rich/", "title": "致富的科學", "author": "Wallace D. Wattles", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "科"},
    {"href": "books/dog-named-money/", "title": "小狗錢錢", "author": "Bodo Schäfer", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "狗"},
    {"href": "books/financial-freedom-schaefer/", "title": "財務自由之路（薛佛）", "author": "Bodo Schäfer", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "自"},
    {"href": "books/happy-money-honda/", "title": "金錢療癒", "author": "Ken Honda", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "癒"},
    {"href": "books/happy-money-dunn/", "title": "快樂金錢：花錢的幸福科學", "author": "Elizabeth Dunn / Michael Norton", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "樂"},
    {"href": "books/automatic-millionaire/", "title": "自動成為百萬富翁", "author": "David Bach", "track": "金錢習慣 · 心態", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "自", "voice": "minimax"},
    {"href": "books/multiple-streams-income/", "title": "多重收入", "author": "Robert G. Allen", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "多"},
    {"href": "books/just-keep-buying/", "title": "持續買進", "author": "Nick Maggiulli", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "買"},
    {"href": "books/same-as-ever/", "title": "一如既往", "author": "Morgan Housel", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "如"},
    {"href": "books/quit-like-millionaire/", "title": "財務獨立，提早退休", "author": "Kristy Shen / Bryce Leung", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "退"},
    {"href": "books/early-retirement-extreme/", "title": "提早退休的極簡之路（暫譯）", "author": "Jacob Lund Fisker", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "極"},
    {"href": "books/wealthy-barber/", "title": "理髮師富翁", "author": "David Chilton", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "理"},
    {"href": "books/what-money-cant-buy/", "title": "金錢不能買什麼", "author": "Michael J. Sandel", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "德"},
    {"href": "books/soul-of-money/", "title": "金錢的靈魂（暫譯）", "author": "Lynne Twist", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "靈"},
    {"href": "books/affluenza/", "title": "富足病（暫譯）", "author": "John de Graaf 等", "track": "金錢習慣 · 心態", "duration": "約 19 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "病", "voice": "minimax"},
    {"href": "books/broke-millennial/", "title": "破產千禧世代（暫譯）", "author": "Erin Lowry", "track": "金錢習慣 · 心態", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "禧", "voice": "minimax"},
    {"href": "books/passive-income-aggressive/", "title": "被動收入，積極退休（暫譯）", "author": "Rachel Richards", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "被"},
    {"href": "books/little-book-common-sense/", "title": "投資常識", "author": "John C. Bogle", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "常"},
    {"href": "books/essays-warren-buffett/", "title": "巴菲特選股文選", "author": "Warren Buffett／Lawrence Cunningham 編", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "巴"},
    {"href": "books/seeking-wisdom/", "title": "尋求智慧", "author": "Peter Bevelin", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "智"},
    {"href": "books/chen-salary-invest/", "title": "我用死薪水輕鬆理財賺千萬", "author": "陳重銘", "track": "金錢習慣 · 心態", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "薪", "voice": "minimax"},
    {"href": "books/cun-gu-easy/", "title": "存股輕鬆學", "author": "陳喬泓", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "存"},
    {"href": "books/wanting-burgis/", "title": "慾望的模仿（暫譯）", "author": "Luke Burgis", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "慾"},
    {"href": "books/make-money-last/", "title": "退休金怎麼用才夠", "author": "Jane Bryant Quinn", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "退"},
    {"href": "books/money-class/", "title": "金錢課", "author": "Suze Orman", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "課"},
    {"href": "books/money-book-young/", "title": "年輕族群金錢書（暫譯）", "author": "Suze Orman", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "青"},
    {"href": "books/get-good-with-money/", "title": "把錢弄明白（暫譯）", "author": "Tiffany Aliche", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "明"},
    {"href": "books/barefoot-investor/", "title": "赤腳投資人（暫譯）", "author": "Scott Pape", "track": "金錢習慣 · 心態", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "赤", "voice": "minimax"},
    {"href": "books/money-master-game/", "title": "錢：掌握遊戲", "author": "Tony Robbins", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "遊"},
    {"href": "books/unshakeable/", "title": "堅不可摧", "author": "Tony Robbins", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "堅"},
    {"href": "books/index-card/", "title": "理財索引卡（暫譯）", "author": "Helaine Olen / Harold Pollack", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "卡"},
    {"href": "books/financial-freedom-sabatier/", "title": "財務自由", "author": "Grant Sabatier", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "自"},
    {"href": "books/set-for-life/", "title": "財務自由起步（暫譯）", "author": "Scott Trench", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "起"},
    {"href": "books/millionaire-fastlane/", "title": "百萬富翁快車道", "author": "MJ DeMarco", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "快"},
    {"href": "books/algebra-of-wealth/", "title": "財富的代數（暫譯）", "author": "Scott Galloway", "track": "金錢習慣 · 心態", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "代", "voice": "minimax"},
    {"href": "books/latte-factor/", "title": "拿鐵因子", "author": "David Bach", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "拿"},
    {"href": "books/total-money-makeover/", "title": "金錢改造", "author": "Dave Ramsey", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "改"},
    {"href": "books/why-smart-money-mistakes/", "title": "為什麼聰明人會做愚蠢的投資", "author": "Gary Belsky / Thomas Gilovich", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "蠢"},
    {"href": "books/dollars-and-sense/", "title": "金錢有意識（暫譯）", "author": "Dan Ariely / Jeff Kreisler", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "識"},
    {"href": "books/e-myth-revisited/", "title": "艾蜜思回歸", "author": "Michael E. Gerber", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "艾"},
    {"href": "books/all-your-worth/", "title": "你的全部身家（暫譯）", "author": "Elizabeth Warren / Amelia Warren Tyagi", "track": "金錢習慣 · 心態", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "身", "voice": "minimax"},
    {"href": "books/how-to-get-rich-dennis/", "title": "如何致富（暫譯）", "author": "Felix Dennis", "track": "金錢習慣 · 心態", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "富"},
    {"href": "books/atomic-habits/", "title": "原子習慣", "author": "James Clear", "track": "習慣 · 思維 · 科普", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "原", "voice": "minimax"},
    {"href": "books/power-of-habit/", "title": "習慣的力量", "author": "Charles Duhigg", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "力"},
    {"href": "books/mini-habits/", "title": "微習慣", "author": "Stephen Guise", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "微"},
    {"href": "books/tiny-habits/", "title": "超強習慣術", "author": "BJ Fogg", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "超"},
    {"href": "books/peak-deliberate/", "title": "刻意練習", "author": "Anders Ericsson / Robert Pool", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "刻"},
    {"href": "books/mindset/", "title": "心態致勝", "author": "Carol S. Dweck", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "態"},
    {"href": "books/grit/", "title": "恆毅力", "author": "Angela Duckworth", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "毅"},
    {"href": "books/flow/", "title": "心流", "author": "Mihaly Csikszentmihalyi", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "流"},
    {"href": "books/procrastination-equation/", "title": "拖延心理學", "author": "Piers Steel", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "拖"},
    {"href": "books/stolen-focus/", "title": "分心時代", "author": "Johann Hari", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "分"},
    {"href": "books/lost-connections/", "title": "失去連結", "author": "Johann Hari", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "連"},
    {"href": "books/irresistible/", "title": "上癮", "author": "Adam Alter", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "癮"},
    {"href": "books/anxious-generation/", "title": "焦慮的一代", "author": "Jonathan Haidt", "track": "習慣 · 思維 · 科普", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "焦", "voice": "minimax"},
    {"href": "books/happiness-hypothesis/", "title": "幸福的假說", "author": "Jonathan Haidt", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "幸"},
    {"href": "books/authentic-happiness/", "title": "真實的幸福", "author": "Martin Seligman", "track": "習慣 · 思維 · 科普", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "真", "voice": "minimax"},
    {"href": "books/thinking-in-bets/", "title": "高勝算決策", "author": "Annie Duke", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "賭"},
    {"href": "books/range/", "title": "範圍", "author": "David Epstein", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "範"},
    {"href": "books/outliers/", "title": "異數", "author": "Malcolm Gladwell", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "異"},
    {"href": "books/tipping-point/", "title": "引爆趨勢", "author": "Malcolm Gladwell", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "爆"},
    {"href": "books/blink/", "title": "眨眼之間", "author": "Malcolm Gladwell", "track": "習慣 · 思維 · 科普", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "眨", "voice": "minimax"},
    {"href": "books/talking-to-strangers/", "title": "說陌生人", "author": "Malcolm Gladwell", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "陌"},
    {"href": "books/nonviolent-communication/", "title": "非暴力溝通", "author": "Marshall B. Rosenberg", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "非"},
    {"href": "books/influence/", "title": "影響力", "author": "Robert B. Cialdini", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "影"},
    {"href": "books/pre-suasion/", "title": "先發影響力", "author": "Robert B. Cialdini", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "先"},
    {"href": "books/how-to-win-friends/", "title": "人性的弱點", "author": "Dale Carnegie", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "人"},
    {"href": "books/crucial-conversations/", "title": "關鍵對話", "author": "Kerry Patterson 等", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "關"},
    {"href": "books/difficult-conversations/", "title": "困難對話", "author": "Douglas Stone 等", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "困"},
    {"href": "books/never-split-difference/", "title": "永不妥協", "author": "Chris Voss", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "談"},
    {"href": "books/getting-to-yes/", "title": "談判力", "author": "Roger Fisher / William Ury", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "則"},
    {"href": "books/start-with-why/", "title": "從為什麼開始", "author": "Simon Sinek", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "為"},
    {"href": "books/leaders-eat-last/", "title": "領導者的養成", "author": "Simon Sinek", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "領"},
    {"href": "books/drive/", "title": "動機", "author": "Daniel H. Pink", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "機"},
    {"href": "books/quiet/", "title": "安靜", "author": "Susan Cain", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "靜"},
    {"href": "books/giving-tree-style-givers/", "title": "給予者", "author": "Adam Grant", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "予"},
    {"href": "books/originals/", "title": "離經叛道", "author": "Adam Grant", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "原"},
    {"href": "books/option-b/", "title": "選擇B", "author": "Sheryl Sandberg / Adam Grant", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "B"},
    {"href": "books/daring-greatly/", "title": "脆弱的力量", "author": "Brené Brown", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "脆"},
    {"href": "books/gifts-of-imperfection/", "title": "不完美的禮物", "author": "Brené Brown", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "缺"},
    {"href": "books/rising-strong/", "title": "起來", "author": "Brené Brown", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "起"},
    {"href": "books/atlas-of-the-heart/", "title": "心的地圖", "author": "Brené Brown", "track": "習慣 · 思維 · 科普", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "圖", "voice": "minimax"},
    {"href": "books/deep-work/", "title": "深度工作", "author": "Cal Newport", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "深"},
    {"href": "books/digital-minimalism/", "title": "數字極簡主義", "author": "Cal Newport", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "數"},
    {"href": "books/so-good-they-cant-ignore-you/", "title": "怎麼工作，才叫成功", "author": "Cal Newport", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "技"},
    {"href": "books/essentialism/", "title": "必要主義", "author": "Greg McKeown", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c4", "mark": "要"},
    {"href": "books/effortless/", "title": "輕鬆的力量", "author": "Greg McKeown", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c5", "mark": "輕"},
    {"href": "books/four-thousand-weeks/", "title": "四千個禮拜", "author": "Oliver Burkeman", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "千"},
    {"href": "books/how-to-take-smart-notes/", "title": "卡片盒筆記", "author": "Sönke Ahrens", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c1", "mark": "卡"},
    {"href": "books/make-it-stick/", "title": "讓學習粘住", "author": "Brown / Roediger / McDaniel", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c2", "mark": "粘"},
    {"href": "books/ultralearning/", "title": "超速學習", "author": "Scott H. Young", "track": "習慣 · 思維 · 科普", "duration": "約 28 分鐘", "chapters": "10 章", "coverClass": "c3", "mark": "超"},
    {"href": "books/7-habits/", "title": "與成功有約", "author": "Stephen R. Covey", "track": "習慣 · 思維 · 科普", "duration": "約 18 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "七", "voice": "minimax"},
    {"href": "books/naval-almanack/", "title": "納瓦爾寶典", "author": "Eric Jorgenson / Naval Ravikant", "track": "創業 · 心態 · 財富", "duration": "約 45 分鐘", "chapters": "10 章", "coverClass": "c-white", "mark": "納", "voice": "minimax"}
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
