var on=document.querySelector("H1");
var count=false;
setInterval(function(){
    if(count){
        on.style.background="green";
    }else{
        on.style.background="black";
    }
    count=!count;
},1000);


