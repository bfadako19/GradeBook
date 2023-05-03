import { useState, useEffect} from "react";
import {Card, Table} from "antd";
import { Student } from "../../models";
import { DataStore } from "aws-amplify";
import { Popconfirm } from "antd";
import { Button } from "antd/es/radio";

const Students = () => {
    

        const[student,setStudent] = useState([]);

        useEffect(() => {
            if(!student){
                return;
            }
            DataStore.query(Student).then(setStudent);
        },[student]);

        const deleteStudent= async (item) => {
            await DataStore.delete(Student, s => s.id.eq(item.id));
            setStudent(student.filter((s) => s.id !== item.id));
           
        }

        const tableColumns = [
            { title: 'Name',
            dataIndex: 'name',
            key: 'name',
           },
           { title: 'Email',
            dataIndex: 'email',
            key: 'email',
           },
           { title: '',
           key: 'action',
           render: (_,item) => (
             <Popconfirm
                 placement = "topLeft"
                 title = {'Are you sure you want to delete this student?'}
                 onConfirm={() => deleteStudent(item)}
                 okText='Yes'
                 cancelText='No'
     
             >
           
             <Button type="primary">Remove</Button>
             </Popconfirm>
           )
         },
        ];
        const styles ={
            page:{
                margin: 20,
            },
    }
        return(
            <Card title='Students' style={styles.page} >
                <Table
                dataSource={student}
                columns={tableColumns}
                rowKey='id'
                />
    
            </Card>
        );
      
    }
export default Students;