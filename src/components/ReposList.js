import React from 'react'
import { Table, Row, Col } from 'antd';
export const ReposList = ({reposData}) => {
    const columns = [
  
  
        {
          title: 'Nombre',
          dataIndex: 'name',
          key: 'id',
        },
        
        {
          title: 'Descripcion',
          dataIndex: 'description',
          key: 'id',
         
        },
       {
        title: 'Lenguaje',
          dataIndex: 'language',
          key: 'id',
       
       },
       {
        title: 'Id',
          dataIndex: 'id',
          key: 'id',
       
       },
      
        
      ];

    return (
        <div>
        
            <Row>

         <Col xs={1} sm={1} md={4} lg={4}>
          {" "}
        </Col>
        <Col xs={12} sm={14} md={15} lg={15}>
        <h4>Lista de repositorios del ususario </h4>
        <div className = "table">
        <Table  rowKey = "id" columns={columns} dataSource={reposData} />
        </div>
       
        </Col>
        <Col xs={1} sm={1} md={1} lg={1}>
          {" "}
        </Col>
      </Row>
                
               {/* { reposData.map((repo)=>{
                   return(
                    <div key={ repo.id}>
                        <p>{repo.name}</p>
                        <p>{repo.description}</p>
                        <p>{repo.language}</p>
                    </div>
                   )
                })

            }
                */}
            
            
        </div>
    )
}
