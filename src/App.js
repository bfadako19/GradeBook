import {Layout } from "antd";
import ScreenRoutes from "./Components/ScreenRoutes";
import SideBar from "./Components/SideBar";
import AuthContextProvider from "./Context/AuthContext";
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);



const {Sider,Content,Footer} = Layout;
function App() {
  return (
    <AuthContextProvider>
       <Layout>
      <Sider style={{backgroundColor: 'white'}}>
        <SideBar/>
      </Sider>
      <Layout>
        <Content>
          <ScreenRoutes/>
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Gradebook @2023
        </Footer>
      </Layout>
    </Layout>
    </AuthContextProvider>
    
    

  );
}

export default App;;
