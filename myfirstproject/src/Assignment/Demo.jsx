import { useState } from 'react'
function Demo() {
    const [data,setdata]=useState("Hello");
    
    function A(){
        setdata("Changed data");
    }
    return(

    <>
    
         <h1>State of variable:</h1>
         <h1>{data}</h1>
        <button onClick={A}>click</button>
 
        


        </>
    )
}

export default Demo