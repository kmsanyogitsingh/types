'use client';
import { useData } from "../_components/DataProvider";
import Link from "next/link";

const Show=()=>{
    const { state, dispatch } = useData();
    
    return(
        <>
            <h2>Show</h2>
            {
                state.users.map((user,i)=>(
                    <div key={i} className="box">
                        <h3>{user.name}</h3>
                        <p>
                            {user.age} <br />
                            {user.email}
                        </p>
            
                        <p>
                           <Link href={`/update?index=${i}`}>Edit</Link>
                        </p>
                        <p>
                            <input 
                                type="button" 
                                value="X" 
                                onClick={()=>dispatch({type:'del',payload:i})} 
                            />
                        </p>
               
                    </div>
                ))
            }
        </>
    );
}
export default Show;
