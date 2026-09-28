// 1. 定義組件

const Button = () => {
  // 業務邏輯組件邏輯
  return <button>click me!</button>
}

function App() {
  return (
    <div className="App">
      {/* 2. 使用組件（渲染組件） */}
      {/* 自閉和 */}
      <Button />
      {/* 成對標簽 */}
      <Button></Button>
    </div>
  )
}

export default App
