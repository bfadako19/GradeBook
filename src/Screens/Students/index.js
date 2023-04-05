import { useState, useEffect} from "react";
import {Card, Table, message, Popconfirm} from "antd";
import { Student } from "../../Models";
import { DataStore } from "aws-amplify";
import { Link } from "react-router-dom";
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
            message.success('Student deleted!')
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
           { title: 'Action',
      key: 'action',
      render: (_,item) => (
        <Popconfirm
            placement = "topLeft"
            title = {'Are you sure you want to delete this student?'}
            onConfirm={() => deleteStudent(item)}
            okText='Yes'
            cancelText='No'

        >
      
        <Button danger type="primary">Remove</Button>
        </Popconfirm>
      )
    },
    {title:'Edit',
     key: 'edit',
     render:(_,item) => ( 
        <Link to={'updateStudent'}>
        <Button type="primary">Edit</Button>
    </Link>)
}
    
        ];
        const renderNewStudentButton = () => {
            return(
                <Link to={'newStudent'}>
                    <Button type="primary">New Student</Button>
                </Link>
            )}
        const styles ={
            page:{
                margin: 20,
            },
    }
        return(
            <Card title='Students' style={styles.page} extra={renderNewStudentButton()}>
                <Table
                dataSource={student}
                columns={tableColumns}
                rowKey='id'
                />
    
            </Card>
        );
      
    }
export default Students;