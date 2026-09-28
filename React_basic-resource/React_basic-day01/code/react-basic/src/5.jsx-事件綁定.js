
function App () {
  // 基礎綁定
  // const handleClick = () => {
  //   console.log('button被點擊了')
  // }

  // 事件參數e
  // const handleClick = (e) => {
  //   console.log('button被點擊了', e)
  // }

  // 傳遞自定義參數
  // const handleClick = (name) => {
  //   console.log('button被點擊了', name)
  // }

  // 既要傳遞自定義參數 而且還要事件對象e
  const handleClick = (name, e) => {
    console.log('button被点击了', name, e)
  }
  return (
    <div className="App">
      <button onClick={(e) => handleClick('jack', e)}>click me </button>
    </div>
  )
}

export default App
