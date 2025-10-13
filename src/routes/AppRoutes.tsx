import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Pricing from '../pages/Pricing';
import Demo from '../pages/Demo';
import PreCall from '../pages/PreCall';
import Services from '../pages/Services';
import Calculator from '../pages/Calculator';
import Industries from '../pages/Industries';
import Solutions from '../pages/Solutions';

const AppRoutes = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pricing' element={<Pricing/>}/>
                <Route path='/industries' element={<Industries/>}/>
                {/* <Route path='/use-cases' element={<UseCases/>}/>
                <Route path='/resources' element={<Resources/>}/> */}
                <Route path='/live-demo' element={<Demo/>}/> 
                <Route path='/precall' element={<PreCall/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/calculator' element={<Calculator/>}/>
                <Route path='/solutions' element={<Solutions/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default AppRoutes