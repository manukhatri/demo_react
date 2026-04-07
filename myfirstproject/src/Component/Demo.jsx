function Demo() {
    let Data="demo";
    function Fun()
    {
        alert("FUNCTION CALL");
    }
        const Fruit=(name)=>
        {
            alert(name);
        }
    function updata()
    {
        Data="Example";
        alert(Data);
    }
    return(
        <>
        <h1>Example of arrow function</h1>
        <button onClick={Fun}>click to call function</button> 
        <button onClick={()=>Fruit("MANU")}>arrow function</button> 
        <button onClick={()=>Fruit("click on apple")}>apple</button> 
        <button onClick={()=>Fruit("click on banana")}>banana</button> 
        <button onClick={()=>Fruit("click on banana")}>banana</button> 
        <button onClick={()=>Fruit("click on banana")}>banana</button> 
          <button onClick={Data}>demo</button> 
         <button onClick={updata}>click on data</button>
         
        

        


        </>
    )
}

export default Demo