// 父傳子
// 1. 父組件傳遞數據  子組件標簽身上綁定屬性
// 2. 子組件接收數據  props的參數 

//注意！！！ props 只是讀對象
//子組件只能讀取props中的數據 不能修改

function Son (props) {
  // props：對象裡面包含了父組件傳遞過來的所有的數據
  // { name:'父組件中的數據'}
  console.log(props)
  return <div>this is son, {props.name}, jsx: {props.child}</div>
}


function App () {
  const name = 'this is app name'
  return (
    <div>
      <Son
        name={name}
        age={18}
        isTrue={false}
        list={['vue', 'react']}
        obj={{ name: 'jack' }}
        cb={() => console.log(123)}
        child={<span>this is span</span>}
      />
    </div>
  )
}

export default App
