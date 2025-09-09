'use client';
import { useData } from "../_components/DataProvider";
import React, { useState, useEffect } from "react";
import { User } from "../_components/DataProvider";
import { useRouter, useSearchParams } from "next/navigation";

const Update = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const index = Number(searchParams.get("index"));  
    const { state, dispatch } = useData();

    const [form, setForm] = useState<User>({ name:"", age:0, email:"" });

    useEffect(()=>{
        if (state.users[index]) {
            setForm(state.users[index]);
        }
    },[index, state.users]);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleUpdate = () => {
        dispatch({type:"update", payload:{index, user:form}});
        router.push("/show");  
    };

    return (
        <>
            <h1>Update</h1>
            {state.users[index] ? (
                <div>
                    Name: <input type="text" name="name" value={form.name} onChange={handleChange} /><br />
                    Age: <input type="number" name="age" value={form.age} onChange={handleChange} /><br />
                    Email: <input type="email" name="email" value={form.email} onChange={handleChange} /><br />
                    <input type="button" value="Update User" onClick={handleUpdate} />
                </div>
            ) : (
                <p>User not found.</p>
            )}
        </>
    );
}
export default Update;
