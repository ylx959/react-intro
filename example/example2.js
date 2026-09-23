//項目的根組件
//App ->index.js->public/index.html(root)

const list=[
  {id:1001,name:'Vue'},
  {id:1002,name:'React'},
  {id:1003,name:'Angular'}
]

function App() {
  return (
    <div className="App">
      this is app
      {/*渲染列表*/}
      {/*map 循環哪個結構 return 結構*/}
      {/*注意事項:加上一個獨一無二的key 字符串或者number id*/}
      {/*key 的作用:React框架內部使用 提升更新性能的 */}
      <ul>
        {list.map(item =><li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
