import { useEffect, useState } from "react"
export const useFetchUsers=(search)=>{

  const [state, setState]  = useState({
      data:[],
      loading:true
  });
  const getUsers = async (search)=>{
    const url = `https://api.github.com/search/users?q=${search}`;        
    const resp = await fetch(url);
    const {items} = await resp.json();
 
     const users = items.map((item) =>{
        return {
            id: item.id,
            login:item.login,
            url:item.avatar_url
        }
     })
    console.log(users);
    return users;
}
  useEffect(()=>{
    getUsers(search).then(usr =>{
        setState({
           data :usr,
           loading:false
        })
    })
  },[search])
  return state;
}