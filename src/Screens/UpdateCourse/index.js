import { Card, Input, Button,message,Form } from "antd";
import {Course } from "../../Models";
import { DataStore } from "aws-amplify";
import { useState} from "react";
    
const UpdateCourse =() =>{
    
    const [course, setCourse] = useState('');
    const [name, setName] = useState('');
        const onFinish = () => {
            if(!name){
                message.error('Name Required!');
                return;
            }
            
                 updateCourse();
        
    
        };
        
        const updateCourse = async () => {
            const updateCourse = await DataStore.save(
                Course.copyOf(course, (updated) => {
                    updated.name = name;
                }));
            setCourse(updateCourse);
            message.success('Course Updated!');
        };
        return (
            <Card title={'Update Course'} style={styles.page}>
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item label = {'Name'} required name='name'>
                        <Input 
                        value = {name}
                        onChange={(e) => setName(e.target.value)}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Update Course</Button>
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
export default UpdateCourse;