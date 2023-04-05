import { Card, Input, Button,message,Form } from "antd";
import {Assignment, Course } from "../../Models";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
const NewAssignment =() =>{
    const [newAssignment, setNewAssignment] = useState('');
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
        if(assignment){
            await createNewAssignment();
        }else{
            await updateAssignment();
        }

    };
    useEffect(() => {
        if(!assignment){
            return;
        }
        setName(assignment.name);
        setTotalPoints(assignment.totalPoints);
        setDueDate(assignment.dueDate);
    }, [assignment]);

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
    const createNewAssignment = async () => {
        const newAssignment = DataStore.save(new Assignment({
            name,
            dueDate,
            totalPoints,
            courseID : 'bf88a6a1-3507-4d07-8cad-7feb37eb635c',
            
            
        }));
        setNewAssignment(newAssignment);
        message.success('Assignment Created!')
    };


    return (
        <Card title={'Create New Assignment'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label = {'Name'} required name='name'>
                    <Input placeholder="Enter Name"
                    value = {name}
                    onChange={(e) => setName(e.target.value)}/>
                </Form.Item>
                <Form.Item label = {'Total Points'} required name='totalPoints'>
                    <Input placeholder="Enter Total Points"
                    value = {totalPoints}
                    onChange={(e) => setTotalPoints(e.target.value)}/>
                </Form.Item>
                <Form.Item label = {'Due Date'} name='dueDate'>
                    <Input placeholder="Enter Due Date"
                    value = {dueDate}
                    onChange={(e) => setDueDate(e.target.value)}/>
                </Form.Item>
                <Form.Item label = {'Course Name'} name='courseName'>
                    <Input placeholder="Enter Course Name"
                    value = {courseName}
                    onChange={(e) => setCourse(e.target.value)}/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Create Assignment</Button>
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
export default NewAssignment;