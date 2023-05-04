import { Card, Table } from "antd";
import { Grade, Assignment } from "../../models";
import { DataStore } from "aws-amplify";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "antd/es/radio";

    
const StudentGrade =() =>{
    const [assignment,setAssignment] = useState([]);
    const [grade,setGrade] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Assignment, id).then(setAssignment);

    }, [id])

   
    


    const getGrades = async () => {
        let assignments = await DataStore.query(Assignment, (a) => a.id.eq(id));
        let grades = await DataStore.query(Grade);
        const display = [];
        assignments.forEach(assignment => {
          let grade = grades.find(g => g.assignmentID === assignment.id)
          if (grade) {
            display.push(grade);
            
          }
        })
        setGrade(display);
    };

    useEffect(() => {
      getGrades();
    });
    const tableColumns = [
        { title: 'Name',
        dataIndex: 'studentName',
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