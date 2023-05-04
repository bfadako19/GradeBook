import { Card, Table } from "antd";
import {Assignment, Course, CA} from "../../models";
import { DataStore } from "aws-amplify";
import { useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import { Popconfirm, message } from "antd";
import { Button } from "antd/es/radio";
    
const CourseAssignment =() =>{
    const[assignment,setAssignment] = useState([]);
    const [course,setCourse] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Course, id).then(setCourse);

    }, [id])
    


    const getAssignments = async () => {
        let courseAssignments = await DataStore.query(CA, (ca) => ca.courseID.eq(id));
        let assignments = await DataStore.query(Assignment);
        const display = [];
        courseAssignments.forEach(courseAssignment => {
          let assignment = assignments.find(a => a.id === courseAssignment.cAAssignmentId)
          if (assignment.name) {
            display.push(assignment);
          }
        })
        setAssignment(display);
      }

        const deleteAssignment= async (item) => {
          await DataStore.delete(Assignment, a => a.id.eq(item.id));
          setAssignment(assignment.filter((a) => a.id !== item.id));
          message.success('Assignment deleted!')
      }
    
    useEffect(() => {
      getAssignments();
    });
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
  },
  {title:'',
   key: 'edit',
   render:(_,item) => ( 
      <Link to={`updateAssignment/${item.id}`}>
      <Button type="primary">Edit</Button>
  </Link>)
  },
  {title:'',
  key: 'grades',
  render:(_,item) => ( 
     <Link to={`grades/${item.id}`}>
     <Button type="primary">Grades</Button>
 </Link>)
 }
   ];
   const renderNewAssignmentButton = () => {
    return(
        <Link to={'newAssignment'}>
            <Button type="primary">New Assignment</Button>
        </Link>
    )
}
   const styles ={
    page:{
        margin: 20,
    },
}
     
    return(
<Card title='Assignments' style={styles.page} extra={renderNewAssignmentButton()}>
            <Table
            dataSource={assignment}
            columns={tableColumns}
            rowKey='id'
            />

        </Card>
)}
export default CourseAssignment;