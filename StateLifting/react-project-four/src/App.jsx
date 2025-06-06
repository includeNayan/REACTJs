import { useState } from 'react'
import './App.css'
import Card from './components/Card'

// App compoent is our parent
function App() {
  // create,manage and change state 
  // every child state will be sync with each other

  // create state
  const [name,setName] = useState('');
  return (
    <div>
      {/* Card compoent is our child */}
      <Card name={name} setName={setName}/>
      <p>I am inside parent components and value of name: {name} </p>
    </div>
  )
}

export default App
