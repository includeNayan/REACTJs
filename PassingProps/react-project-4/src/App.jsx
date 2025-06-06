import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
function App() {
  const [count,setCount] = useState(0);

  function click(){
    setCount(count+1);
  }

  return (
    <div>
      {/* passing function */}
      <Button click = {click} text = "click here">
        <h1>{count}</h1>

      </Button>
      <Card name="Nayan">
      {/* below 3 parts are children of Cards */}

      <h1>Learning to pass Props ie properties</h1>
      <p>Hell yeah!!!</p>
      <p>crazy concepts</p>
      </Card>
    </div>
  )
  
}

export default App
