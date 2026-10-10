# 讀書原型 · 《窮爸爸富爸爸》全書帶讀

LeapAhead 風格：書摘、對話帶讀、心智圖、粵語柔和舒適女聲（zh-HK-HiuMaanNeural）地道香港口語朗讀。

## 如何開啟

```bash
cd dushu-prototype
python3 -m http.server 8080
```

開啟 `http://localhost:8080`。

## 章節（9）

| # | 標題 | 音訊 |
|---|------|------|
| 0 | 前言／兩個爸爸 | 5:35 |
| 1 | 富人不為錢工作 | 5:49 |
| 2 | 為何要教導財務素養 | 5:18 |
| 3 | 顧好自己的事業 | 6:23 |
| 4 | 公司與稅賦的力量 | 5:06 |
| 5 | 富人創造金錢 | 5:32 |
| 6 | 為了學習而工作 | 4:52 |
| 7 | 克服障礙 | 4:40 |
| 8 | 開始行動 | 4:55 |

每章四模式：**書摘**｜**對話帶讀**｜**心智圖**｜**音訊**。進度存 `localStorage`。

## 音訊

| 項目 | 內容 |
|------|------|
| 引擎 | edge-tts · `zh-HK-HiuMaanNeural` |
| 風格 | 柔和舒適女聲 · 地道香港口語 · 無開場白 |
| 檔案 | `audio/ch00.mp3` … `audio/ch08.mp3` |
| 稿本 | `narration/chXX.txt` |
| 總長 | **48:09（九章合計）**（九章合計） |

重新產生單章：

```bash
.venv/bin/edge-tts --voice zh-HK-HiuMaanNeural \
  --file narration/ch00.txt \
  --write-media audio/ch00.mp3 \
  --write-subtitles audio/ch00.vtt
```

## 檔案結構

```
index.html      # 介面
styles.css      # 樣式
content.js      # 各章書摘／對話／心智圖
app.js          # 導航、進度、播放器
narration/      # 口語粵語 TTS 稿
audio/          # mp3 + txt + vtt
```

開啟網頁不需要 `.venv`（僅本機產 TTS 用）。
