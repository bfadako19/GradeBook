import { Card, Input, Button,message,Form } from "antd";
import { Student, Grade } from "../../models";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const NewGrade =() =>{
    const [newGrade, setNewGrade] = useState('');
    const[name, setName] = useState('');
    const[grade,setGrade] = useState('');
    const[student,setStudent] = useState('');
    const [course, setCourse] = useState('');
    
    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Student, id).then(setStudent);

    }, [id])
    console.log(course);
    
    const onFinish = async () => {
        if(!name){
            message.error('Name Required!');
            return;
        }
        if(!grade){
            message.error('Grade Required!');
            return;
        }
        if(!grade){
             await createNewGrade();
        }

    
    };
   
    const createNewGrade = async () => {
        const newGrade = DataStore.save(new Grade({
            name,
            int: grade,
            
            
            
        }));
        setNewGrade(newGrade);
        message.success('Grade Submitted!')
    };
    
    
    return (
        <Card title={'Create New Grade'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label = {'Name'} required name='name'>
                    <Input placeholder="Enter Assignment Name"
                    value = {name}
                    onChange={(e) => setName(e.target.value)}/>
                    
                </Form.Item>
                <Form.Item label = {'Grade'} required name='grade'>
                    <Input placeholder="Enter Grade"
                    value = {grade}
                    onChange={(e) => setGrade(e.target.value)}/>
                    
                </Form.Item>
                
                <Form.Item>
                    <Button type="primary" htmlType="submit">Submit Grade</Button>
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
export default NewGrade;