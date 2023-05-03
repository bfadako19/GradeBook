import { Menu } from "antd";
import { useNavigate} from "react-router-dom";
import { Auth } from "aws-amplify";


const SideMenu = () => {
    const navigate = useNavigate();
    

    const onMenuItemClick = async (menuItem) => {
        if (menuItem.key === 'signout') {
            await Auth.signOut();
            window.location.reload();
        } else {
            navigate(menuItem.key);
        }
    };
    

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
        {
            key: 'signout',
            label: 'Sign Out',
        },
    ];

    
    
    return (
        
        <Menu items={menuItems} onClick={onMenuItemClick}>
        </Menu>
        
        
    );

};
export default SideMenu ;