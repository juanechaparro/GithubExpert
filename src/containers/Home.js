import React from 'react';
import { useLocation } from 'react-router-dom';
import { SearchUsers } from '../components/SearchUsers'
import { UsersGrid } from '../components/UsersGrid';
import queryString from 'query-string'



export const Home = () => {

    const location = useLocation();
    const {q= ''} = queryString.parse(location.search);
  
  return (
    <>
    <br />
    <div className = 'ttl flex-container'>
    <h1>Github Expert Search</h1>
    </div>
    <hr/>
    <br />
    <br />
    <SearchUsers />
    {
               (q === '') ? 
               <div className = "alert alert-info org">
                   Ingresa el usuario de Github a buscar 
              </div>
              :  <UsersGrid search={q}/> 
     }     
          

   </>
  );
}

export default Home;