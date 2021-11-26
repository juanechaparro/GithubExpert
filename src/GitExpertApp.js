import React,{useState} from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import {Home} from './containers/Home'
import { UserDetail } from './containers/UserDetail';
import AppContext from './context/AppContext'
export const GitExpertApp = () => {
    const [user, setUser] = useState('')
    const initialValue  = {user, setUser}
    // const user = useSetUser('');
    return (
        <div>
            <AppContext.Provider value = {initialValue}>
            <BrowserRouter>
            <Routes>
            <Route  path="/" element={<Home/>} />
            <Route  path="/user" element={<UserDetail/>} />
            </Routes>

            </BrowserRouter>
            </AppContext.Provider> 
            

        </div>
    )
}

