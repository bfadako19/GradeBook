import { createContext, useState, useEffect, useContext } from 'react';
import { Auth, DataStore } from 'aws-amplify';
import { Course } from '../models';

const AuthContext = createContext({});

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [course, setCourse] = useState();
    const sub = user?.attributes?.sub;

    useEffect(() => {
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setUser);
    }, []);

    useEffect(() => {
        if (!sub) {
            return;
        }
    
        DataStore.query(Course, (r) => r.adminSub.eq(sub)).then(
            (course) => setCourse(course[0]));

    }, [sub]);

    return (
        <AuthContext.Provider value={{ course, sub, setCourse }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);