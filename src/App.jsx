import style from "./App.module.css";
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App(){
const [calVal,setCalVal] = useState("");
const onButtonClick=(buttonText)=>{
    if(buttonText==='c'){
setCalVal("");
    }
    else if(buttonText==='='){
const result= eval(calVal);
setCalVal(result);
    }
    else{

        const newCalVal=calVal + buttonText;
        setCalVal(newCalVal);
    
    }
}

    return(
        <>

        <div className="container" align="center">
<div className={style.calculator}>
<Display calVal={calVal}/>

<Buttons onButtonClick={onButtonClick}></Buttons>
</div>
</div>

        </>
    )
}
export default App;