import { Card, Input, Button,message,Form } from "antd";
import {Course } from "../../Models";
import { DataStore } from "aws-amplify";
import { useState, useEffect} from "react";
    
const NewCourse =() =>{
    const [newCourse, setNewCourse] = useState('');
    const [course, setCourse] = useState('');
    const [name, setName] = useState('');
        const onFinish = () => {
            if(!name){
                message.error('Name Required!');
                return;
            }
            if(!course){
                 createNewCourse();
            }else{
                 updateCourse();
            }
    
        };
        useEffect(() => {
            if(!course){
                return;
            }
            setName(course.name);
            
        }, [course]);
        const updateCourse = async () => {
            const updateCourse = await DataStore.save(
                Course.copyOf(course, (updated) => {
                    updated.name = name;
                }));
            setCourse(updateCourse);
            message.success('Course Updated!');
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