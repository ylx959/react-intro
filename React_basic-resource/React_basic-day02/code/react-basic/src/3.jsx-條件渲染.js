const isLogin = true

function App () {
  return (
    <div className="App">
      {/* 邏輯與 && */}
      {isLogin && <span>this is span</span>}
      {/* 三元運算 */}
      {isLogin ? <span>jack</span> : <span>loading...</span>}
    </div>
  )
}

export default App
