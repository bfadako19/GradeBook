import { Card, Input, message, Form } from "antd";
import { Course } from "../../models";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "antd/es/radio";


const UpdateCourse = () => {

    const [course, setCourse] = useState('');
    const [name, setName] = useState('');
    const { id } = useParams();
    useEffect(() => {
        if (!id) {
            return;
        }
        DataStore.query(Course, id).then(setCourse);

    }, [id])
    useEffect(() => {
        if (!course) {
            return;
        }
        setName(course.name);

    }, [course]);
    const onFinish = () => {
        if (!name) {
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
        <Card title={'View Course'} style={styles.page}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label={'Name'} required >
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Update Course</Button>
                </Form.Item>


            </Form>
            <Form >
                <Form.Item>
                    <Link to={'CourseStudent'}>
                        <Button type="primary">View Students</Button>
                    </Link>
                </Form.Item>
                <Form.Item>
                <Link to={'CourseAssignment'}>
                        <Button type="primary">View Assignments</Button>
                    </Link>
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