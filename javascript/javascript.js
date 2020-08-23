var console;
//var name = "Vidur";
//var age = "20";
//var msg = "Hi, my name is " + name + " and I am " + age + " years old!";
//alert(msg);

//var studentname=["timmy","janessa","arun"]
//var naughtylist=[];
//naughtylist.push(studentname[0]);
//var index=naughtylist.indexOf("timmy");
//
//console.log(naughtylist);
//if(index>-1)
//    {
//        naughtylist.splice(index,1);
//  }
//var val1=1;
//var val2="1";
//if(val1===val2)
//    console.log("equal");
//else
//    console.log("not equal");
//
//var student1={
//    firstname:"vidur",
//    lastname:"agarwal",
//    age:23
//};
//
//var student2={
//    firstname:"vidura",
//    lastname:"agarwala",
//    age:24,
//    greeting : function(){
//    return "Hi I am "+this.firstname+" and my age is "+this.age;
//}
//};
//var student=[];
//student.push(student1);
//student.push(student2);
//for( var i=0;i<student.length;i++)
//    {
//        console.log(student[i]);
//    }
//console.log(student2.greeting());


this.car="honda city";
var vidur={
    car:"verna",
    getcar:function(){
        return this.car;
    }
};
//console.log(vidur.car+" "+vidur.getcar()+" "+this.car);
var x=vidur.getcar.bind(vidur);
console.log(x());


//verna value will be printed
//var y=vidur.getcar();
//console.log(y);