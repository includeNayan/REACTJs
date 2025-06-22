import './App.css'

function App() {

function handleClick(){
    alert("I am clicked!");
}
function f(){
  alert("Mouse is hovering over para 1");
}
  return (
    <div>

      {/* this is called immediate invoke */}
    {/* so function reference should be passed rather than direct passing so
    that event is executed and only when click function is perform then only 
    perform the render. that is done by () => */}
      <button onClick={() => alert("button has been clicked")}>Click here</button>


      <p onMouseMove={f}>PARA 1</p>

      {/* <button onClick={handleClick}> Click me </button> */}
    </div>
  )
}

export default App
