#  React 18 學習項目 (ylx)

參考 [Jikeyuan (GitHub)](https://github.com/BaichuanTang/Jikeyuan) 來學習的

黑馬程序員的 React 18 課程 跟著做的極客園項目 這裡放筆記跟心得

## 項目結構

- `ylx-frontend/`：前端項目 (自己跟著課程寫的)
- `React 基礎 - 配套資料/`：day01 ~ day11 的 PPT、MD筆記、code

參考：[點評視頻](https://www.bilibili.com/video/BV1M34y1w7D6/)

## 學到什麼

1. **React 18**：組件、jsx、useState、useEffect 這些核心用法
2. **React Router**：路由配置、頁面跳轉、路由守衛
3. **Redux**：狀態管理 數據流怎麼走 (day10 還有講 zustand)
4. **工程化**：craco 配置別名 `@`、模塊化、項目打包

## 心得

- React 只要會 JavaScript + HTML + CSS 就能直接寫 概念比 Vue 少
- Vue 語法糖多 要記的東西多 但上手之後寫起來比較順
- React 是單向數據流 Vue 有雙向綁定 所以 React 寫起來比較囉嗦
- Vue 一個頁面就能搞定 導入模塊也比較不容易亂
- 核心就幾個函數：`useState`、`useEffect` 用 redux 再加一個 `useDispatch`
- 注意：HTML 跟 CSS 課程裡大部分是直接複製的 自己寫 CSS 還不太行 之後要補

## 問題 / 可以改進的地方

1. 沒有接口文檔 資料裡也找不到
2. 接口調用的寫法還是很複雜 就算 day10 講了 zustand 也一樣
3. 沒登錄用高階組件 (HOC) 強制跳回登錄頁 我覺得不太合理
   - 登錄狀態應該由後端決定 看狀態碼 401 來判斷要不要跳轉
   - 本地 Token 過期 後端回 401 頁面會直接崩
4. P99 配置默認跳轉時 Layout 裡的路由要改成 `/home` 不是 `/`
   - 不然 P101 高亮菜單會對不上 (課程裡沒提到要檢查首頁高亮)
5. React 項目的命名感覺有點亂 沒有 Vue 簡潔
