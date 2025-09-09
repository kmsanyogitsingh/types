'use client';
import React,{useReducer,useContext,createContext} from 'react';
export type User={
    name:string;
    age:number;
    email:string;
};
type ActionType=
    | {type:'add',payload:User}
    | {type:'reset'}
    | {type:'del',payload:number}
    | {type:'update', payload:{ index:number; user:User }};

type Records={
    users: User[];
};

type ContextType={
    state:Records;
    dispatch:React.Dispatch<ActionType>
};

const is:Records={users:[]};
const reducer=(state:Records,action:ActionType):Records=>{  
    switch(action.type)
    {      
        case "add": {
            const rcds=[...state.users];
            rcds.push(action.payload);
            return {users:rcds}; 
        }
        case "del": {
            const arr=[...state.users];
            arr.splice(action.payload,1);
            return {users:arr}; 
        }
        case "update": {
            const arr=[...state.users];
            arr[action.payload.index] = action.payload.user;
            return {users:arr};
        }
        case "reset": 
            return is;
        default : 
            return state;
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