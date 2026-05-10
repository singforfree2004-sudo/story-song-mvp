# 故事成歌｜Song Your Story MVP

一週內可上線的純前端靜態 MVP。使用 React + Vite 製作，不需要會員、資料庫、後台、金流 API 或 AI API。

## 如何安裝

```bash
cd story-song-mvp
npm install
```

## 如何本機預覽

```bash
npm run dev
```

啟動後打開終端機顯示的本機網址，通常是 `http://localhost:5173/`。

## 如何修改 Google Form 連結

打開 `src/data/site.js`，修改：

```js
export const GOOGLE_FORM_URL = 'https://forms.gle/PLACEHOLDER';
```

改成正式表單連結即可。首頁 Hero、方案按鈕與 CTA 都會一起更新。

## 如何替換 Demo 音檔

把正式 MP3 放到 `public/audio/`，並使用相同檔名覆蓋：

- `demo-birthday.mp3`
- `demo-wedding.mp3`
- `demo-memory.mp3`

如果想改檔名，請同步修改 `src/data/demos.js` 的 `audioSrc`。

## 如何替換 Demo 封面圖

把正式 JPG 放到 `public/images/`，並使用相同檔名覆蓋：

- `demo-birthday-cover.jpg`
- `demo-wedding-cover.jpg`
- `demo-memory-cover.jpg`

如果圖片尚未放入或載入失敗，網站會顯示「封面待放入」的 placeholder。

## 如何修改方案價格

打開 `src/data/packages.js`，修改對應方案的 `price`、`features` 或 `fit`。方案卡片會自動依資料更新。

## 如何修改 FAQ

打開 `src/data/faqs.js`，新增、刪除或修改 `question` 與 `answer` 即可。

## 如何部署到 Netlify

1. 將專案推到 GitHub。
2. 在 Netlify 新增站台並選擇該 repository。
3. Build command 填入：

```bash
npm run build
```

4. Publish directory 填入：

```bash
dist
```

5. 部署完成後，若使用 `/terms` 與 `/voice-consent` 直接網址，請在 Netlify 加上 SPA fallback。建立 `public/_redirects` 並加入：

```text
/* /index.html 200
```

## 如何部署到 Vercel

1. 將專案推到 GitHub。
2. 在 Vercel 匯入該 repository。
3. Framework Preset 選擇 `Vite`。
4. Build command 使用：

```bash
npm run build
```

5. Output directory 使用：

```bash
dist
```

Vercel 通常會自動處理 Vite SPA fallback。

## 如何部署到 GitHub Pages

專案已包含 `.github/workflows/deploy.yml`。推到 GitHub 後：

1. 到 GitHub repository 的 `Settings` → `Pages`。
2. Source 選擇 `GitHub Actions`。
3. 推送到 `main` 分支後，GitHub 會自動執行 `npm install`、`npm run build` 並發布。

`npm run build` 會自動把 `dist/index.html` 複製成 `dist/404.html`，讓 `/terms` 與 `/voice-consent` 這類前端路由在 GitHub Pages 也能回到 React app。

此專案的 Vite `base` 已設為 `./`，可直接部署到免費的 GitHub Pages repo 網址，例如 `https://你的帳號.github.io/story-song-mvp/`。

## 主要資料位置

- Demo 歌曲：`src/data/demos.js`
- 方案內容：`src/data/packages.js`
- FAQ：`src/data/faqs.js`
- 加購項目：`src/data/addons.js`
- 表單與聯絡資訊：`src/data/site.js`

## 注意事項

目前 `public/audio/` 與 `public/images/` 內放的是 placeholder 檔案。上線前請替換為正式 MP3 與 JPG。
