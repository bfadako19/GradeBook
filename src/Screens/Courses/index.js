import { useState, useEffect } from "react";
import { Card, Table,message, Popconfirm } from "antd";
import {Course} from '../../models';
import { DataStore } from "aws-amplify";
import { Link } from "react-router-dom";
import { Button } from "antd/es/radio";

const Courses = () => {

    const [course, setCourse] = useState([]);
    
    useEffect(() => {
        if(!course){
            return;
        }
        DataStore.query(Course).then(setCourse);
    },[course]);
    const deleteCourse = async (item) => {
        await DataStore.delete(Course, c => c.id.eq(item.id));
        setCourse(course.filter((c) => c.id !== item.id));
        message.success('Course deleted!')
    }

    const tableColumns = [
        {
            title: 'Course',
            dataIndex: 'name',
            key: 'name',
        },
        { title: '',
      key: 'Action',
      render: (_,item) => (
        <Popconfirm
            placement = "topLeft"
            title = {'Are you sure you want to delete this Course'}
            onConfirm={() => deleteCourse(item)}
            okText='Yes'
            cancelText='No'

        >
      
        <Button danger type="primary">Remove</Button>
        </Popconfirm>
      )
    },
    {title:'',
     key: 'Action',
     render:(_,item) => ( 
        <Link to={`viewCourse/${item.id}`}>
        <Button type="primary">View</Button>
    </Link>)
    }
        



    ];
    const renderNewCourseButton = () => {
        return(
            <Link to={'newCourse'}>
                <Button type="primary">New Course</Button>
            </Link>
        )}
    const styles = {
        page: {
            margin: 20,
        },
    }
    return (
        <Card title='Courses' style={styles.page} extra={renderNewCourseButton()}>
            <Table
                dataSource={course}
                columns={tableColumns}
                rowKey='id'
                
                
            />

        </Card>
    );

}



export default Courses;