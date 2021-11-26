import { useEffect, useState } from "react"

export const useFetchDetails=(user)=>{

 const [userData, setUserData] = useState([]);
 const [reposData, setReposData] = useState([]);
 const[loading, setLoading] = useState(true);
//   const [state, setState]  = useState({
//       userData:[],
//       reposData:[],
//       loading:true
//   });
  
  const getDetails = async (user)=>{
    const url = `https://api.github.com/users/${user}`;        
        const resp = await fetch(url);
        const item = await resp.json();
     
       
        console.log(item);
        
        return item;
}
const getReposDetails = async (user)=>{
    const url = `https://api.github.com/users/${user}/repos`;        
        const resp = await fetch(url);
        const item = await resp.json();
     
       
        console.log('repos::,',item);
        
        return item;
}
  useEffect(()=>{
    getDetails(user).then(usr =>{
        setUserData(usr);
    })
   
}
  ,[user])

  useEffect(()=>{
    getReposDetails(user).then(rep =>{
        setReposData(rep);
        setLoading(false);
    })
}
  ,[user])


  return {
      userData,
      reposData,
      loading
  };
}