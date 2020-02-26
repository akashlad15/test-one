

// creating my own forEach function
// function myforEach(arr,func){
//     for(var i=0;i<arr.length;i++){
//         func(arr[i]);
//     }
// }

// var color=["red","yellow","green"];
// myforEach(color,function(value){
//     console.log(value);
// })

//creating foreach function using another method

Array.prototype.myFOReach= function(value){
    for(var i=0;i<this.length;i++){
    value(this[i]);
    }
}