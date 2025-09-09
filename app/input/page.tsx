'use client';
import React,{ useState } from "react";
import { User } from "../_components/DataProvider";
import { useData } from "../_components/DataProvider";
const Input=()=>{
    const[data,setData]=useState<User>({name:"",age:0,email:""});
    const{dispatch}=useData();
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSave=()=>{
        dispatch({type:'add',payload:data});
        setData({name:"",age:0,email:""});
        console.log("data has been saved");
    }
    return(
        <>
            <h2>Input</h2>
            <div>
                Name : <input type="text" name="name" value={data.name} onChange={handleChange} /><br />
                Age : <input type="number" name="age" value={data.age} onChange={handleChange} /><br />
                Email : <input type="email" name="email" value={data.email} onChange={handleChange} /><br />
                <input type="button" value="save data" onClick={handleSave} />
            </div>
        </>
    );
}
export default Input;