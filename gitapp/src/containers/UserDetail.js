import React,{useContext} from 'react'
import AppContext from '../context/AppContext'
import { useFetchDetails } from '../hooks/useFetchDetails';
import { UserItem } from '../components/UserItem';
import { ReposList } from '../components/ReposList';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
export const UserDetail = () => {
const {user} = useContext(AppContext);
const{userData, reposData }= useFetchDetails(user);

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
