
import { useState, useEffect} from "react";
import {Card, Table, message, Popconfirm} from "antd";
import { Assignment } from "../../models";
import { DataStore } from "aws-amplify";
import { Button } from "antd/es/radio";




const Assignments = () => {
  
    const[assignment,setAssignment] = useState([]);

    useEffect(() => {
        if(!assignment){
            return;
        }
        DataStore.query(Assignment).then(setAssignment);
    },[assignment]);
  
    const deleteAssignment= async (item) => {
        await DataStore.delete(Assignment, a => a.id.eq(item.id));
        setAssignment(assignment.filter((a) => a.id !== item.id));
        message.success('Assignment deleted!')
    }

    const tableColumns = [
       { title: 'Assignment ',
        dataIndex: 'name',
        key: 'name',
       },
       { title: 'Total Points',
       dataIndex: 'totalPoints',
       key: 'totalPoints',
      },
       { title: 'Due Date',
       dataIndex: 'dueDate',
       key: 'dueDate',
      },
      { title: '',
      key: 'action',
      render: (_,item) => (
        <Popconfirm
            placement = "topLeft"
            title = {'Are you sure you want to delete this assignment?'}
            onConfirm={() => deleteAssignment(item)}
            okText='Yes'
            cancelText='No'

        >
      
        <Button danger type="primary">Remove</Button>
        </Popconfirm>
      )
      }

     

    ];
  
    const styles ={
        page:{
            margin: 20,
        },
}
    return(
        <Card title='Assignments' style={styles.page} >
            <Table
            dataSource={assignment}
            columns={tableColumns}
            rowKey='id'
            />

        </Card>
    );
  
}
export default Assignments;