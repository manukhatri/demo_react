import { useState } from 'react'
function Toggle(){
    const[value,setvalue]=useState("status off");
    function changevalue(){
        setvalue("status on");

    }
    return(
        <>
        <h1>{value}</h1>
        <button onClick={changevalue}>Toggle</button>
        </>
    )
}
export default Toggle