// 定義文章類型
const articleType = 3  // 0 1 3

// 定義核心函數（根據文章類型返回不同的JSX模版）

function getArticleTem () {
  if (articleType === 0) {
    return <div>我是无图文章</div>
  } else if (articleType === 1) {
    return <div>我是单图模式</div>
  } else {
    return <div>我是三图模式</div>
  }
}

function App () {
  return (
    <div className="App">
      {/* 調用函數渲染不同的模版 */}
      {getArticleTem()}
    </div>
  )
}

export default App
