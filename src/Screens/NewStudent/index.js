import { Card, Input, Button,message,Form } from "antd";
import { Student } from "../../Models";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
const NewStudent =() =>{
    const [newStudent, setNewStudent] = useState('');
    const[name, setName] = useState('');
    const[email,setEmail] = useState('');
    const[student,setStudent] = useState('');
    
    const onFinish = async () => {
        if(!name){
            message.error('Name Required!');
            return;
        }
        if(!email){
            message.error('Email Required!');
            return;
        }
        if(!student){
             await createNewStudent();
        }else{
            await updateStudent();
        }
    
    };
    useEffect(() => {
        if(!student){
            return;
        }
        setName(student.name);
        setEmail(student.email);
        
    }, [student]);
    const updateStudent = async () => {
        const updateStudent = await DataStore.save(
            Student.copyOf(student, (updated) => {
                updated.name = name;
                updated.email = email;
                
            }));
        setStudent(updateStudent);
        message.success('Student Updated!');
    };
    const createNewStudent = async () => {
        const newStudent = DataStore.save(new Student({
            name,
            email,
            
        }));
        setNewStudent(newStudent);
        message.success('Student Created!')
    };
    return (
        <Card title={'Create New Student'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label = {'Name'} required name='name'>
                    <Input placeholder="Enter Name"
                    value = {name}
                    onChange={(e) => setName(e.target.value)}/>
                    
                </Form.Item>
                <Form.Item label = {'Email'} required name='email'>
                    <Input placeholder="Enter Email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary" htmlType="submit">Create Student</Button>
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
export default NewStudent;