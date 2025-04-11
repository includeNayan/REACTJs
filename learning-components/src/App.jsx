import Usercard from "./components/Usercard"
import './App.css'
function App() {
  return (
    <div className="card">
      {/* person1,2,3 are all props */}
      <Usercard name="Person1"/>
      <Usercard name="Person2"/>
      <Usercard name="Person3"/>
    </div>
  )
}

export default App
