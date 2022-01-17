import React,{useState} from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import {Home} from './containers/Home'
import { UserDetail } from './containers/UserDetail';
export const GitExpertApp = () => {

    // const user = useSetUser('');
    return (
        <div>
            
            <BrowserRouter>
            <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/user" element={<UserDetail/>} />
            </Routes>

            </BrowserRouter>
            
            

        </div>
    )
}

