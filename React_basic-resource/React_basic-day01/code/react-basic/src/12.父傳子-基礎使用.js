// 父傳子
// 1. 父元件傳遞資料  子元件標簽身上繫結屬性
// 2. 子元件接收資料  props的引數 

//注意！！！ props 只是讀物件
//子元件只能讀取props中的資料 不能修改

function Son (props) {
  // props：物件裡麵包含了父元件傳遞過來的所有的資料
  // { name:'父元件中的資料'}
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
