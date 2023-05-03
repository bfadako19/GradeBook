import { Card, Input, Button,message,Form } from "antd";
import {Assignment} from "../../models";
import { DataStore } from "aws-amplify";
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
const UpdateAssignment =() =>{
    const[name, setName] = useState('');
    const[dueDate,setDueDate] = useState('');
    const[totalPoints,setTotalPoints] = useState('');
    const [assignment, setAssignment] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Assignment, id).then(setAssignment);

    }, [id])

    

    useEffect(() => {
        if(!assignment){
            return;
        }
        setName(assignment.name);
        setTotalPoints(assignment.totalPoints);
        setDueDate(assignment.dueDate);
    }, [assignment]);
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
            }));
        setAssignment(updateAssignment);
        message.success('Assigment Updated!'); 
    };
   


    return (
        <Card title={'Update Assignment'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label = {'Name'} required >
                    <Input 
                    value = {name}
                    onChange={(e) => setName(e.target.value)}/>
                </Form.Item>
                <Form.Item label = {'Total Points'} required >
                    <Input 
                    value = {totalPoints}
                    onChange={(e) => setTotalPoints(e.target.value)}/>
                </Form.Item>
                <Form.Item label = {'Due Date'} >
                    <Input 
                    value = {dueDate}
                    onChange={(e) => setDueDate(e.target.value)}/>
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