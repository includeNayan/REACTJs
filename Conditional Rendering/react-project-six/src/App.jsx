import { useState } from 'react'
import './App.css'
import LogoutBtn from './assets/components/LogoutBtn';
import LoginBtn from './assets/components/LoginBtn';

function App() {
  const[isLoggedIn,setLoggedIn] = useState(true);

  return (
    <div>
      {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
    </div>
  )
  // if(isLoggedIn==true){
  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else {
  //   return (
  //     <LoginBtn/>
  //   )
  // }
}

export default App
