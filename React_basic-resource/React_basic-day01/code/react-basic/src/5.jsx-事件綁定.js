
function App () {
  // 基礎繫結
  // const handleClick = () => {
  //   console.log('button被點選了')
  // }

  // 事件引數e
  // const handleClick = (e) => {
  //   console.log('button被點選了', e)
  // }

  // 傳遞自定義引數
  // const handleClick = (name) => {
  //   console.log('button被點選了', name)
  // }

  // 既要傳遞自定義引數 而且還要事件物件e
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
