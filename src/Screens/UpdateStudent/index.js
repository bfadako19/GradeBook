import { Card, Input, Button,message,Form } from "antd";
import { Student } from "../../Models";
import { DataStore } from "aws-amplify";
import { useState} from "react";
const UpdateStudent =() =>{
    
    const[name, setName] = useState('');
    const[email,setEmail] = useState('');
    const[student,setStudent] = useState('');
    
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
                <Form.Item label = {'Name'} required name='name'>
                    <Input
                    value = {name}
                    onChange={(e) => setName(e.target.value)}/>
                    
                </Form.Item>
                <Form.Item label = {'Email'} required name='email'>
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