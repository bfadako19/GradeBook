import { Card, Table } from "antd";
import { Student,Course, CS } from "../../models";
import { DataStore } from "aws-amplify";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Popconfirm , message} from "antd";
import { Button } from "antd/es/radio";

    
const CourseStudent =() =>{
    const [student,setStudent] = useState([]);
    const [course,setCourse] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Course, id).then(setCourse);

    }, [id])

    const deleteStudent= async (item) => {
        await DataStore.delete(Student, s => s.id.eq(item.id));
        setStudent(student.filter((s) => s.id !== item.id));
        message.success('Student deleted!')
    }
    


    const getStudents = async () => {
        let courseStudents = await DataStore.query(CS, (cs) => cs.courseID.eq(id));
        let students = await DataStore.query(Student);
        const display = [];
        courseStudents.forEach(courseStudent => {
          let student = students.find(a => a.id === courseStudent.cSStudentId)
          if (student.name) {
            display.push(student);
          }
        })
        setStudent(display);
        console.log(student);
    };
    useEffect(() => {
      getStudents();
    });
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
     {title:'',
      key: 'edit',
      render:(_,item) => ( 
         <Link to={`UpdateStudent/${item.id}`}>
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
   const renderNewStudentButton = () => {
    return(
        <Link to={'newStudent/'}>
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
)}
export default CourseStudent;
