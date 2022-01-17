import React from 'react'

import { useFetchDetails } from '../hooks/useFetchDetails';
import { UserItem } from '../components/UserItem';
import { ReposList } from '../components/ReposList';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom';
export const UserDetail = () => {
const location = useLocation();
const {q= ''} = queryString.parse(location.search);

const{userData, reposData }= useFetchDetails(q);

    return (
        <>
        <div className ="flex-container">
        <h1>{userData.name}</h1>
        <div  className ="home">
        <Link to ="/"> <Button>Home</Button> </Link>
        </div>
        </div>
        
        
        <div className = "detail-grid">
             
            <UserItem userInfo= {userData}/>
            <ReposList reposData ={reposData}/>
        </div>
        </>
    )

}
