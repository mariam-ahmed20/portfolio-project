import Home from './Components/Home/Home';
import About from './Components/About/About';

import Experiences from './Components/Experiences/Experiences';

import Skills from './Components/Skills/Skills';
import Work from './Components/Work/Work';
import SideNav from './Components/SideNav/SideNav';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MasterLayout from './Components/MasterLayout/MasterLayout';
import NotFound from './Components/NotFound/NotFound';
import { Children } from 'react';

import './App.css'

function App() {

  const routes = createBrowserRouter([
    {
      path: "/", element:<MasterLayout />,
      errorElement : <NotFound />,
  
    children :[
      {index:true, element: <Home />},
      {path: 'home', element: <Home />},
      {path: 'about', element: <About />},
      {path: 'skills', element: <Skills />},
      {path: 'experiences', element: <Experiences />},
      {path: 'work', element: <Work />}

    ]
    }
  ])

  return (
    <>

      <RouterProvider router={routes}>
        
        < MasterLayout />

      </RouterProvider>

      
    </>
  )
}

export default App
