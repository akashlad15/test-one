import React from "react";
import ReactDOM from "react-dom";

function  DateTime(){
    const obj =new Date();
    const hours = obj.getHours();
    let timeofDay;
    if(hours < 12){
        timeofDay="It's Morning";
    } else if(hours>=12 && hours<17){
        timeofDay="afterNoon";
    } else{
        timeofDay="Good Night";
    }
    const style2 ={
        color:"green",
        backgroundColor:"yellow"
    }
    return(
        <h1 style={style2}> It's time to {timeofDay} </h1>
        
    )
}
export default DateTime