import style from "./buttonsContainer.module.css";
function Buttons({onButtonClick}){
const buttonNames=["c","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
return(
    <>
        <div className={style.buttonsContainer}>
{buttonNames.map((buttonName) =>(<button className={style.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>))}


</div>
    
    </>
)


}
export default Buttons;