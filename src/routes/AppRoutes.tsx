import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';
import Demo from '../pages/Demo';

const AppRoutes = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pricing' element={<Pricing/>}/>
                {/* <Route path='/use-cases' element={<UseCases/>}/>
                <Route path='/resources' element={<Resources/>}/> */}
                <Route path='/live-demo' element={<Demo/>}/> 
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRoutes