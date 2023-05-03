import { Card, Table } from "antd";
import { Student,Grade } from "../../models";
import { DataStore } from "aws-amplify";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "antd/es/radio";

    
const StudentGrade =() =>{
    const [student,setStudent] = useState([]);
    const [grade,setGrade] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Student, id).then(setStudent);

    }, [id])

   
    


    const getGrades = async () => {
        let students = await DataStore.query(Student, (s) => s.id.eq(id));
        let grades = await DataStore.query(Grade);
        const display = [];
        students.forEach(student => {
          let grade = grades.find(g => g.id === student.studentId)
          if (grade.name) {
            display.push(grade);
          }
        })
        setGrade(display);
        console.log(student);
    };
    useEffect(() => {
      getGrades();
    });
    const tableColumns = [
        { title: 'Name',
        dataIndex: 'name',
        key: 'name',
       },
       { title: 'Grade',
        dataIndex: 'grade',
        key: 'grade',
       },
   ];
   const renderNewGradeButton = () => {
    return(
        <Link to={'newGrades'}>
            <Button type="primary">New Grade</Button>
        </Link>
    )}

   const styles ={
    page:{
        margin: 20,
    },
}
     
    return(
<Card title='Grades' style={styles.page} extra={renderNewGradeButton()}>
            <Table
            dataSource={grade}
            columns={tableColumns}
            rowKey='id'
            />

        </Card>
)}
export default StudentGrade;