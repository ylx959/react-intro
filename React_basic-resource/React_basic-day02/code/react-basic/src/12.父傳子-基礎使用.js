// 父傳子
// 1. 父元件傳遞資料  子元件標籤身上繫結屬性
// 2. 子元件接收資料  props的引數

function Son (props) {
  // props：物件裡面包含了父元件傳遞過來的所有的資料
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
