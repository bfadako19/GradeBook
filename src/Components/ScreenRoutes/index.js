import { Routes,Route} from "react-router-dom";
import Assignments from "../../Screens/Assignments";
import Courses from "../../Screens/Courses";
import Students from "../../Screens/Students"
import NewAssignment from "../../Screens/NewAssignment";
import NewCourse from "../../Screens/NewCourse";
import NewStudent from "../../Screens/NewStudent";
import UpdateStudent from "../../Screens/UpdateStudent";
import UpdateCourse from "../../Screens/UpdateCourse";
import UpdateAssignment from "../../Screens/UpdateAssignment";


const ScreenRoutes = () => {

    return (
        
        <Routes>
            <Route path="/"element={<Courses/>}/>
            <Route path="assignments"element={<Assignments/>}/>
            <Route path="students"element={<Students/>}/>
            <Route path="assignments/newAssignment"element={<NewAssignment/>}/>
            <Route path="newCourse"element={<NewCourse/>}/>
            <Route path="students/newStudent"element={<NewStudent/>}/>
            <Route path="students/updateStudent"element={<UpdateStudent/>}/>
            <Route path="updateCourse"element={<UpdateCourse/>}/>
            <Route path="assignments/updateAssignment"element={<UpdateAssignment/>}/>
        </Routes>
        
    );

}

export default ScreenRoutes;