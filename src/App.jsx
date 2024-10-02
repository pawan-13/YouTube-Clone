/* eslint-disable react/react-in-jsx-scope */
import Navbar from "./Components/Navbar/Navbar";
import { Routes,Route } from "react-router-dom";
import Video from "./Pages/Video/Video";
import Home from "./Pages/Home/Home";
import { useState } from "react";

const App = () => {

  const[sidebar,setSideBar] = useState(false);
  return(
    <>
      <div>
        <Navbar setSideBar={setSideBar} sidebar={sidebar}/>
        <Routes>
           <Route path = '/' element={<Home sidebar={sidebar}/>}/>
           <Route path = '/videos/:category/:Id' element={<Video/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;
