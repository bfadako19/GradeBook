import { Card, Input, Button,message,Form } from "antd";
import { Student,Course,CS } from "../../models";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const NewStudent =() =>{
    const [newStudent, setNewStudent] = useState('');
    const[name, setName] = useState('');
    const[email,setEmail] = useState('');
    const[student,setStudent] = useState('');
    const [course, setCourse] = useState('');
    const [newCS, setNewCS] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Course, id).then(setCourse);

    }, [id])
    console.log(course);
    
    const onFinish = async () => {
        if(!name){
            message.error('Name Required!');
            return;
        }
        if(!email){
            message.error('Email Required!');
            return;
        }
        await createNewStudent();
        await createNewCS();

    
    };
    useEffect(() => {
        if(!student){
            return;
        }
        setName(student.name);
        setEmail(student.email);
        
    }, [student]);
    const createNewStudent = async () => {
        const newStudent = DataStore.save(new Student({
            name,
            email,
            
            
            
        }));
        setNewStudent(newStudent);
        message.success('Student Created!');
    };
    const createNewCS = async () => {
        const newCS = DataStore.save(new CS({
            courseID: course.id,
            cSStudentId: student.id
            
            
        }));
        setNewCS(newCS);
        message.success('wsdt')
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