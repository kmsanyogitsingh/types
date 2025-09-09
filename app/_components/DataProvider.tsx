'use client';
import React,{useReducer,useContext,createContext} from 'react';


type Student={
    roll:number;
    name:string;
    address:string;
};
type ActionType={type:'update',payload:Student}|{type:'reset'};

type ContextType={
    state:Student;
    dispatch:React.Dispatch<ActionType>
};

const is:Student={roll:1001,name:'amit kapoor',address:'New Ashok nagar'};

const reducer=(state:Student,action:ActionType):Student=>{
    //console.log("from reducer : ",action.type);
    if(action.type!="reset")
    {
        //console.log(action.payload);   
    }    
    switch(action.type)
    {      
        case "update" : return action.payload;
                            //return {roll:action.payload.roll,name:action.payload.name,address:action.payload.address};
        case "reset" : return is;
        default : return state;
    }
}

const DataContext=createContext({} as ContextType);

export const useData=()=>{
    return useContext(DataContext);
}


const DataProvider=({children}:{children:React.ReactNode})=>{
    const[state,dispatch]=useReducer(reducer,is);   
    return(
        <DataContext value={{state,dispatch}}> 
            {children}
        </DataContext>
    );
}
export default DataProvider;