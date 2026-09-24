//項目的根組件
//App ->index.js->public/index.html(root)

const isLogin=false;

function App() {
  return (
    <div className="App">
      this is app
      {/*邏輯與 &&*/}
      {isLogin && <span>this is span</span>}
      {/*三元運算*/}
      {isLogin ? <span>jack</span> :<span>loading...</span>}
    </div>
  );
}

export default App;
