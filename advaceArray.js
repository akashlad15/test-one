var movie=[
    {
        title:"Black Diamond",
        haswatch:true,
        rating:5
    },
    {
        title:"Gladiator",
        haswatch:false,
        rating:3
    },
    {
        title:"Insepation",
        haswatch:true,
        rating:5
    }

]
movie.forEach(function(value){
    var result="You have ";
    if(value.haswatch){
        result=result+"watched";
    }else{
        result=result+"not watched";
    }
    result=result+"\""+value.title +"\"-";
    result= result+ value.rating+" stars";
    console.log(result)
})