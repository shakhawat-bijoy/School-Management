import React from "react";
import Home from './components/page/Home'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from './components/layer/RootLayout'
import Registration from "./components/Registration";


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout/>}
        // errorElement={<Error />}
      >
        <Route index element={<Home/>} ></Route>
        <Route path="/registration" element={<Registration/>} ></Route>
        

      </Route>
    )
  );
  return (
   <>
     <RouterProvider router={router} />
   </>
  )
}

export default App