'use client';
import { useData } from "./_components/DataProvider";
const Home=()=>{
    const{state,dispatch}=useData();   
    
    return(
        <>
            <h2>Home</h2>
            <p>
                Roll : {state.roll} <br />
                Name : {state.name} <br />
                Address : {state.address}
            </p>        
            <p>
                <input type="button" value="Update from Home" 
                    onClick={()=>dispatch({type:'update',payload:{roll:5555,name:'kunal',address:'Delhi'}})} />
            </p>  
        </>
    );
}
export default Home;