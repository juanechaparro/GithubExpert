import React,{useState} from 'react';
import { SearchUsers } from '../components/SearchUsers'
import { UsersGrid } from '../components/UsersGrid';


// const  getUsers = async (search)=>{
//     const url = `https://api.github.com/search/users?q=${search}`;        
//     const resp = await fetch(url);
//     const {items} = await resp.json();
//     const users = items;
//     // const users = data.map(img =>{
//     //     return {
//     //         id: img.id,
//     //         title:img.title,
//     //         url:img.images?.downsized_medium.url
//     //     }
//     // })
//     console.log(users);
//     return users;
// }

export const Home = () => {

    
    const[search , setSearch] = useState('')
    // useFetchUsers(search);
    // getUsers('juan').then(usr =>{console.log(usr)})
  return (
    <>
    <br />
    <div className = 'title flex-container'>
    <h1>Github Expert Search</h1>

   

    </div>
    <br />
    <br />
    <SearchUsers setSearch ={setSearch}/>
            
    {search && <UsersGrid search={search}/>}        

   </>
  );
}

export default Home;