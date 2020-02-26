var score1 =document.getElementById("span1");
var score2 =document.getElementById("span2");

var button1=document.getElementById("player1");
var button2=document.getElementById("player2");

var input=document.querySelector("#input");
var resetnumber=document.querySelector("p span");
var reset=document.getElementById("reset");
var player1counter=0;
var player2counter=0;
var winningscore=5;
var gameover=false;


button1.addEventListener("click",function(){
if(!gameover){
    player1counter++;
    if(player1counter==winningscore){
        score1.classList.add("winner")
        gameover=true;
    }
        
        score1.textContent=player1counter;
    }})


button2.addEventListener("click",function(){
    if(!gameover){
        player2counter++;
        if(player2counter==winningscore){
            score2.classList.add("winner")
            gameover=true;
        }
           
            score2.textContent=player2counter;
        }
   })

reset.addEventListener("click",function(){
    player1counter=0;
    player2counter=0;
    score1.textContent= 0;
    score2.textContent= 0;
    gameover=false;
    score1.classList.remove("winner");
    score2.classList.remove("winner");
})

input.addEventListener("change",function(){
    resetnumber.textContent=input.value;
    winningscore=Number(input.value);
    resets();
})
function resets(){
    player1counter=0;
    player2counter=0;
    score1.textContent= 0;
    score2.textContent= 0;
    gameover=false;
    score1.classList.remove("winner");
    score2.classList.remove("winner");
}

var list =document.querySelectorAll("li");
for(var i=0;i<list.length;i++){
    list[i].addEventListener("mouseover",function(){
        this.style.color="green";
    })
    list[i].addEventListener("mouseout",function(){
        this.style.color="black";
    })
    list[i].addEventListener("click",function(){
        this.classList.toggle("done");
    })
}