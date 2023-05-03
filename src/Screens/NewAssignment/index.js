import { Card, Input, Button,message,Form } from "antd";
import {Assignment, CA, Course} from "../../models";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const NewAssignment =() =>{
    const [newAssignment, setNewAssignment] = useState('');
    const[name, setName] = useState('');
    const[dueDate,setDueDate] = useState('');
    const[totalPoints,setTotalPoints] = useState('');
    const [course, setCourse] = useState('');
    const [assignment, setAssignment] = useState('');
    const [newCA, setNewCA] = useState('');

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Course, id).then(setCourse);

    }, [id])
    const onFinish = async () => {
        if(!name){
            message.error('Name Required!');
            return;
        }
        if(!totalPoints){
            message.error('Total Points Required!');
            return;
        }
        await createNewAssignment();
        await createNewCA();
            

    };
    useEffect(() => {
        if(!assignment){
            return;
        }
        setName(assignment.name);
        setTotalPoints(assignment.totalPoints);
        setDueDate(assignment.dueDate);
    }, [assignment]);

    const createNewAssignment = async () => {
        const newAssignment = DataStore.save(new Assignment({
            name,
            dueDate,
            totalPoints : totalPoints,
            courseID: course.id
            
            
        }));
        setNewAssignment(newAssignment);
        message.success('Assignment Created!')
    };

    const createNewCA = async () => {
        const newCA = DataStore.save(new CA({
            courseID: course.id,
            assignmentID: assignment.id
            
            
        }));
        setNewCA(newCA);
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