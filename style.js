// var name =prompt("hello enter yor name");
// alert("Hello guys"+name);
// console.log("hello guys"+name);


// var age=89;
// if(age<18){
//     console.log("you are underage");
// } else if(age<21){
//     console.log("you are allow but can't drink");
// }
// else {
//     console.log("yes you can do anything");
// }
 

// var age=Number(prompt("Enter you age"));
//  if(age<0){
//      console.log("error ");
//  }
//  if(age==21){
//      console.log("happy birthday");
//  }
//  if(age%2!=0){
//      console.log("you have odd hday");
//  }
//  if(age%Math.sqrt(age)==0){
//      console.log("you have perfect square bday");
//  }

// var name=prompt("hi guys enter your name");
// var fullname=capital(name);
// function capital(str){
//     if(typeof str=="number"){
//         return "error you enter wrong value";
//     }
//     return str.charAt(0).toUpperCase()+str.slice(1);
// }
// alert(fullname);

// var name="hi i am akash-lad-vilas";
// var value= name.replace(/-/g,"_");
// console.log(value);
// var toDolist=["hello guys"];
// var input=prompt("enter your value");
// while(input!=="quit")
//     {
//     //      if(input==="list")
//     //      {
//     //      console.log(toDolist);
//     //      } 
//     // else if(input==="new")
//     // {
//         var newin=prompt("enter the value");
//         toDolist.push(newin);
//     // }
//     var input=prompt("enter your value");
// }


var todo=["first"];
var input=prompt("enter your choice");
 while(input!=="quit")
    {
        if(input==="list")
            {
                todo.forEach(function(value,i)
                {
                 console.log(i+"at index"+value);
                 }
                )
            } 
                 else if (input==="new"){
                    var value=prompt("enter the value");
                    todo.push(value);
                }else if(input==="delete"){
                var ind=prompt("enter the index value")
                todo.splice(ind,1);
                }
                var input=prompt("enter your choice");

    }