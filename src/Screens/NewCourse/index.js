import { Card, Input, Button,message,Form } from "antd";
import {Course } from "../../models";
import { DataStore } from "aws-amplify";
import { useState} from "react";
    
const NewCourse =() =>{
    const [newCourse, setNewCourse] = useState('');
    const [name, setName] = useState('');
        const onFinish = () => {
            if(!name){
                message.error('Name Required!');
                return;
            }
                 createNewCourse();
    
        };
       
        
        const createNewCourse = async () => {
            const newCourse = DataStore.save(new Course({
                name,  
            }));
            setNewCourse(newCourse);
            message.success('Course Created!')
        };
        return (
            <Card title={'Create New Course'} style={styles.page}>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label = {'Name'} required name='name'>
                        <Input placeholder="Enter Name"
                        value = {name}
                        onChange={(e) => setName(e.target.value)}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Create Course</Button>
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
export default NewCourse;