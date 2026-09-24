const articleType=1;

//定義核心函數(根據文章類型返回不同的jsx模板)

function getArticleTem(){
  if(articleType===0){
    return <div>我是無圈文章</div>
  }
  else if(articleType===1){
    return <div>我是單圈模式</div>
  }
  else{
    return <div>我是三圈模式</div>
  }
}

function App() {

  return (
    <div className="App">
       {/* 調用函數撋染不同的模板*/ }
       {getArticleTem()}      
    </div>
  );
}

export default App;