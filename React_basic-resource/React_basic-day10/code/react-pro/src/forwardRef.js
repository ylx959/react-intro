import { forwardRef, useRef } from "react"

// 子元件
// function Son () {
//   return <input type="text" />
// }

const Son = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />
})


// 父元件
function App () {
  const sonRef = useRef(null)
  const showRef = () => {
    console.log(sonRef)
    sonRef.current.focus()
  }
  return (
    <>
      <Son ref={sonRef} />
      <button onClick={showRef}>focus</button>
    </>
  )
}

export default App