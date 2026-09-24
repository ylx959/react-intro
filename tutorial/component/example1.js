//1.定義組件
function Button(){
  //業務邏輯組件邏輯
  return <button>click me!</button>
}
//兩種寫法都行
// const Button=()=>{
//   return <button>click me!</button>
// }

function App() {

  return (
    <div className="App">
      {/*2.使用組件(渲染組件)*/}
     {/*自閉合*/}
     <Button/>
     {/*對成標籤 */}
     <Button></Button>
    </div>
  );
}

export default App;