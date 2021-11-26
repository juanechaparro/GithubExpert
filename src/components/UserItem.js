import React from 'react'
import { Card } from 'antd';
const { Meta } = Card;
export const UserItem = ({userInfo}) => {
    // const getUsers = async (search)=>{
    //     const url = `https://api.github.com/users/${search}`;        
    //     const resp = await fetch(url);
    //     const item = await resp.json();
     
       
    //     console.log(item);
        
    //     return item;
    // }
    // const userInfo = getUsers("josancamon19");
    return (
        <div>
            <br />
            <br />
            <Card
                        hoverable

                         key = {userInfo.id} 
                         className = "cardDetail animate__animated animate__bounce"
                         cover={<img className= 'imgBorder' src={userInfo.avatar_url} alt={userInfo.login} />}>
                        
                        <Meta title = {userInfo.name} description = { userInfo.login}/>
                        <p>id :{userInfo.id}</p>
                        <p>Compañia : {userInfo.company}</p>
                        <p>Bio: {userInfo.bio}</p>
                       
                        
                    </Card>
        </div>
    )
}
