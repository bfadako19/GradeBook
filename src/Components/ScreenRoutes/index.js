import { Routes,Route} from "react-router-dom";
import Assignments from "../../Screens/Assignments";
import Courses from "../../Screens/Courses";
import Students from "../../Screens/Students"
import NewAssignment from "../../Screens/NewAssignment";
import NewCourse from "../../Screens/NewCourse";
import NewStudent from "../../Screens/NewStudent";
import UpdateStudent from "../../Screens/UpdateStudent";
import ViewCourse from "../../Screens/ViewCourse";
import UpdateAssignment from "../../Screens/UpdateAssignment";
import CourseStudent from "../../Screens/CourseStudent";
import CourseAssignment from "../../Screens/CourseAssignment";
import StudentGrade from "../../Screens/StudentGrades";
import NewGrade from "../../Screens/NewGrade";

const ScreenRoutes = () => {

    return (
        
        <Routes>
            <Route path='/'element={<Courses/>}/>
            <Route path='assignments'element={<Assignments/>}/>
            <Route path='students'element={<Students/>}/>
            <Route path='ViewCourse/:id/CourseAssignment/newAssignment'element={<NewAssignment/>}/>
            <Route path='newCourse'element={<NewCourse/>}/>
            <Route path='ViewCourse/:id/CourseStudent/newStudent'element={<NewStudent/>}/>
            <Route path='ViewCourse/:id/CourseStudent/updateStudent/:id'element={<UpdateStudent/>}/>
            <Route path='ViewCourse/:id'element={<ViewCourse/>}/>
            <Route path='ViewCourse/:id/CourseAssignment/updateAssignment/:id'element={<UpdateAssignment/>}/>
            <Route path='ViewCourse/:id/courseStudent'element={<CourseStudent/>}/>
            <Route path='ViewCourse/:id/courseAssignment'element={<CourseAssignment/>}/>
            <Route path='ViewCourse/:id/courseStudent/grades/:id'element={<StudentGrade/>}/>
            <Route path='ViewCourse/:id/CourseStudent/grades/:id/newGrades'element={<NewGrade/>}/>

        </Routes>
        
    );

}

export default ScreenRoutes;