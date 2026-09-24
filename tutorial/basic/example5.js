

function App() {
  // const handClick=()=>{
  //   console.log("button is clicked")
  // }
  //事件參數e
  //自定義參數
  //
  const handleClick=(name,e)=>{
    console.log("button is clicked",name,e)
  }
  return (
    <div className="App">
      <button onClick={(e)=>handleClick("Jack",e)}>click me</button>
    </div>
  );
}

export default App;
