import React,{useState} from 'react';
import { SearchUsers } from '../components/SearchUsers'
import { UsersGrid } from '../components/UsersGrid';




export const Home = () => {

    
    const[search , setSearch] = useState('')
  
  return (
    <>
    <br />
    <div className = 'ttl flex-container'>
    <h1>Github Expert Search</h1>
    </div>
    <hr/>
    <br />
    <br />
    <SearchUsers setSearch ={setSearch}/>
            
    {search && <UsersGrid search={search}/>}        

   </>
  );
}

export default Home;