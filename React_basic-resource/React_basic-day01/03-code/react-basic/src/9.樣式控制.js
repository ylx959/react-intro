// 導入樣式
import './index.css'

const style = {
  color: 'red',
  fontSize: '50px'
}

function App () {
  return (
    <div>
      {/* 行內樣式控制 */}
      <span style={style}>this is span</span>
      {/* 通過class類名控制 */}
      <span className="foo">this is class foo</span>
    </div>
  )
}

export default App
