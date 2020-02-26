var toggal=document.querySelector("button");
var isColored=false;
toggal.addEventListener("click",function(){
    if(isColored){
        document.body.style.backgroundColor="orange";
    }else{
    document.body.style.backgroundColor="white";
    }
    isColored=!isColored;
})