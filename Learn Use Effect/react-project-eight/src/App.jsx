import { useEffect, useState } from 'react'
import './App.css'
function App() {
  const [count,setCount] = useState(0);
  const [total,setTotal] = useState(1);
  // useeffect is basically a react hook that helps in side effect generate
  // Dom content load then db connection is a sideffect generation


  // first: side effect function
  // second: clean-up function
  // third: comma separated dependency list
  // if anyone entities from third is updated then useEffect will run

// useEffect hook will always being run before rendering
  
  // variation 1
  // runs on every render
  // useEffect(() => {
  //   alert("Each render runs")
  // })
  
  // variation 2 (dependency is empty)
  // runs only at first render
  // useEffect(() => {
  //   alert("Render runs once at first");
  // }, [])


 // variation 3 (dependency is non-empty)
  // runs only when dependency is updated and before render
// even initialization of count with 0 is considered as updation
  // useEffect(() => {
  //   alert("Runs every time when count is updated");
  // }, [count])

  // variation 4 (multiple dependencies)
  // runs only when dependency is updated and before render
// even initialization of count with 0 is considered as updation
  // useEffect(() => {
  //   alert("Runs every time when count/total is updated");
  // }, [count,total])

// variation 5 (adding cleanup)
  // when things go unbounded cleanup occurs i.e second
  useEffect(() => {
    alert("Count is updated")
  
    return () => {
      alert("Count is unbounded from UI")
    }
  }, [count])
  

  function handleClick(){
    setCount(count+1);
  }
  function handleClickTotal(){
    setTotal(total+1);
  }

  return (
  <div>
    <button onClick={handleClick}>
      Count here
    </button>
    <br/>
    Count is: {count}
<br/>
    <button onClick={handleClickTotal}>
      Total here
    </button>
    <br/>
    Total is: {total}
  </div>
  )
}

export default App
