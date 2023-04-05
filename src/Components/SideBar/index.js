import { Menu } from "antd";
import { useNavigate} from "react-router-dom";


const SideMenu = () => {
    const navigate = useNavigate();
    

    const menuItems = [
         {
            key: '/',
            label: 'Courses'
        },
        {
            key: 'assignments',
            label: 'Assignments'
        },
        {
            key: 'students',
            label: 'Students'
        },
    ];

    
    const onMenuItemClick = async (menuItems) => {
       
        
        navigate(menuItems.key);
        
    };
    return (
        
        <Menu items={menuItems} onClick={onMenuItemClick}>
        </Menu>
        
        
    );

};
export default SideMenu ;