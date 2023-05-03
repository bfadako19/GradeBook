import { Card, Input, Button,message,Form } from "antd";
import { Student } from "../../models";
import { DataStore } from "aws-amplify";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

const UpdateStudent =() =>{
    const[name, setName] = useState('');
    const[email,setEmail] = useState('');
    const[student,setStudent] = useState('');
    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Student, id).then(setStudent);

    }, [id])
    useEffect(() => {
        if (!student) {
            return;
        }
        setName(student.name);
        setEmail(student.email);
    }, [student]);
    console.log(student);

    
    const onFinish = () => {
        if(!name){
            message.error('Name Required!');
            return;
        }
        if(!email){
            message.error('Email Required!');
            return;
        }
        
            updateStudent();
        
    
    };
    
    const updateStudent = async () => {
        const updateStudent = await DataStore.save(
            Student.copyOf(student, (updated) => {
                updated.name = name;
                updated.email = email;
                
            }));
        setStudent(updateStudent);
        message.success('Student Updated!');
    };
   
    return (
        <Card title={'Update Student'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label = {'Name'} required >
                    <Input
                    value = {name}
                    onChange={(e) => setName(e.target.value)}/>
                    
                </Form.Item>
                <Form.Item label = {'Email'} required>
                    <Input 
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}/>
                    
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary" htmlType="submit">Update Student</Button>
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
export default UpdateStudent;