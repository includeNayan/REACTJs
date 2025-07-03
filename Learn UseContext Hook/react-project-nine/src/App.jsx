import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';

// in prop drilling, we transfer props from the parent to the desired child but there might be child that doesnot require the prop but need to pass through
// so we use use context
//src: context provider
//dest: context receiver

//Step1: create context
const UserContext = createContext();

//Step2: wrap all the child inside a provider
//Step3: pass the value
//Step4: go inside consumer and consume
function App() {
  
const [user, setUser] = useState({name:"Nayan"});

  return (
    <>
    {/* we are making the value accessible to childA,B,C so wrapping up in provider */}
    <UserContext.Provider value={user}>
    <ChildA/>
    </UserContext.Provider>
   
    </>
  )
}

export default App
export {UserContext}
