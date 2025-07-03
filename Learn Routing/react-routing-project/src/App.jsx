
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Tests from './components/tests';
import Courses from './components/courses';
import Grade from './components/grade';
import Notfound from './components/Notfound';

// useNavigation hook is used to move from one page to another without reloading the page
const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <Navbar/>
         <Home/>
      </div>
     
    },
     {
      path:"/about",
      element:
      <div>
        <Navbar/>
          <About/>
      </div>
    },
     {
      path:"/dashboard",
      element:
       <div>
        <Navbar/>
        <Dashboard/>
       </div>,
      //  in nested routing parent must use outlet tag
       children:[
        {
          path:'courses',
          element:<Courses/>
        },
        {
          path:'tests',
          element:<Tests/>
        },
        {
          path:'grade',
          element: <Grade/>
        }
       ]
    },
     {
      // route parameter id
      // useParams can be used to fetch route parameter
      path:"/student/:id",
      element:
       <div>
        <Navbar/>
        <ParamComp/>
       </div>
    },
    {
      // to make no found page better
      path:'*',
      element: <Notfound/>
    }
  ]
);

function App() {
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
    
}

export default App
