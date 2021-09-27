import React,{useState,createContext} from 'react';
import DashboardSkel from './StudentDashboardFiles/DashboardSkel';
import SignIn from './UserAuthentication/SignIn';


export const UserContext =createContext();


export const UserProvider=(props)=>{
    const [userId,setUserId]=useState("userid");

    return (
        <UserContext.Provider value={[userId,setUserId]}>
            {props.children}
            {/* <SignIn /> */}
            {/* <DashboardSkel/> */}
        </UserContext.Provider>
    );
};