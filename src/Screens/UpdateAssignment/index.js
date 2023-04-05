import { Card, Input, Button,message,Form } from "antd";
import {Assignment, Course } from "../../Models";
import { DataStore } from "aws-amplify";
import { useState} from "react";
const UpdateAssignment =() =>{
    const[name, setName] = useState('');
    const[dueDate,setDueDate] = useState('');
    const[totalPoints,setTotalPoints] = useState('');
    const [course, setCourse] = useState('');
    const [courseName, setCourseName] = useState('');
    const [assignment, setAssignment] = useState('');
    const onFinish = async () => {
        if(!name){
            message.error('Name Required!');
            return;
        }
        if(!totalPoints){
            message.error('Total Points Required!');
            return;
        }
       
            await updateAssignment();
        

    };
    

    const updateAssignment = async () => {
        const updateAssignment = await DataStore.save(
            Assignment.copyOf(assignment, (updated) => {
                updated.name = name;
                updated.totalPoints = totalPoints;
                updated.dueDate = dueDate;
                updated.courseID = 'bf88a6a1-3507-4d07-8cad-7feb37eb635c';
            }));
        setAssignment(updateAssignment);
        message.success('Assigment Updated!');
    };
   


    return (
        <Card title={'Update Assignment'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label = {'Name'} required name='name'>
                    <Input 
                    value = {name}
                    onChange={(e) => setName(e.target.value)}/>
                </Form.Item>
                <Form.Item label = {'Total Points'} required name='totalPoints'>
                    <Input 
                    value = {totalPoints}
                    onChange={(e) => setTotalPoints(e.target.value)}/>
                </Form.Item>
                <Form.Item label = {'Due Date'} name='dueDate'>
                    <Input 
                    value = {dueDate}
                    onChange={(e) => setDueDate(e.target.value)}/>
                </Form.Item>
                <Form.Item label = {'Course Name'} name='courseName'>
                    <Input 
                    value = {courseName}
                    onChange={(e) => setCourse(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Update Assignment</Button>
                </Form.Item>
                
            </Form>
        </Card>
    );
};

const styles = {
    page: {
        margin: 20,
    },
}
export default UpdateAssignment;