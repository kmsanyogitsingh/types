'use client';
import { useData } from "@/app/_components/DataProvider";
const Contact=()=>{
    const{state,dispatch}=useData();   
   
    return(
        <>
            <h2>Contact</h2>
            <p>
                Roll : {state.roll} <br />
                Name : {state.name} <br />
                Address : {state.address}
            </p>    
            <p>
                <input type="button" value="Update from Contact" 
                    onClick={()=>dispatch({type:'update',payload:{roll:8888,name:'sumit',address:'Mumbai'}})} />
            </p>   
            <p>
                <input type="button" value="Reset from Contact" onClick={()=>dispatch({type:'reset'})} />
            </p>
           
        </>
    );
}
export default Contact;