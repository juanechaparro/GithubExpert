import { Card, Row, Col} from 'antd';
import React,{useContext} from 'react'
import AppContext from '../context/AppContext';
import { useFetchUsers } from '../hooks/useFetchUsers';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;


export const UsersGrid = ({search}) => {
    const {setUser} = useContext(AppContext);
    const navigate = useNavigate();
     const {data , loading} = useFetchUsers(search);
    return (
        <div>
            
      
       <Row>
         <Col xs={1} sm={1} md={2} lg={2}>
          {" "}
        </Col>
        <Col xs={12} sm={14} md={20} lg={20}>
        <h3 className = 'animate__animated animate__fadeIn'>Usuario Buscado : {search}</h3>
       <br />
       {loading && <p className ='animate__animated animate__flash'>'Cargando...'</p> }
            
                <div className = "card-grid">
                {
                   data.map((usr)=>{
                       return (
                        <Card
                        hoverable

                         key = {usr.id} 
                         className = "card animate__animated animate__bounce"
                         cover={<img src={usr.url} alt={usr.login} />
                         }
                         onClick={e =>{setUser(usr.login) 
                            navigate('/user');}}
                         >
                         
                        <Meta title = {usr.login} description = {"Id : " + usr.id}/>
                        
                    </Card>
                       )
                   })
                   
               }
                </div>
                </Col>
                <Col xs={1} sm={2} md={2} lg={2}>
                 {" "}
                </Col>
                 </Row>
              
            
         
        </div>
    )
}
