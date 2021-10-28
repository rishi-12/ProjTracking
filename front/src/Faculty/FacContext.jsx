import React,{useState,createContext} from 'react';

export const FacContext =createContext();


export const FacProvider=(props)=>{
    const [facId,setFacId]=useState("facId");

    return (
        <FacContext.Provider value={[facId,setFacId]}>
            {props.children}
            {/* <SignIn /> */}
            {/* <DashboardSkel/> */}
        </FacContext.Provider>
    );
};