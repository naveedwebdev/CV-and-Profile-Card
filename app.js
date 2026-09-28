console.log("naveed");
let a = 12;
let b = 5;
console.log(a+b);
// pre increment or decrement
// post increment or decrement
console.log(++a);
console.log(a++);
console.log(a--);
console.log(a);
console.log(a+b - --a+b-- - --a);
console.log(--a+b - ++a+b);
// if else if

let money = 1000;
if (money = 250){
}else  if (150 <= money){
    console.log("itna ma halemm ay gey");
     console.log("haleem kAHIOO");
      console.log("HALEEM kahna ka bad pass bcha", money -150);
} else if(100<= money){
} else if(50 <= money){
  console.log("itna ma halemm khowooio");
     console.log("haleem roll ");
      console.log("HALEEM kahna ka bad pass bcha", money -50);  
}

else{

}
let day = "saturday"
if(day == "saturday"){
    console.log("aj class hay");
}
else{
    console.log("aj chotii ha");
}
// array 
// mixed arrat
let student = ["naveed","hamid","ali","fahag"];
for(let i = 0; i < student.length; i++ ){
    console.log("hello", student[i]);
}
// for loop
// syntax
for ( let i =0; i <3; i++);{
    console.log("hello world");
}

let students = ["naveed","hamid","ali","fahag", "ahmed"];
console.log(students.length);
// for (let i = 0; i < 5; i++);{
//     console.log(i);
// }
// array method
// push pop shift unshift slice splice
// let number = [1,2,3,4,5,6]
// let strarr = ["kuchb","fggh","zxc"]

// method 1 kaamka traka arry ka last element ko push kra 
// alert("hello world")
let numarr = [1,2,3,4,5]
let strarrr = ["naff","random","foo","hamid","ali"]
let copystrarr = strarrr.slice(0,2)
console.log(strarrr);
// strarrr.push("fahad");
// console.log(strarrr);
strarrr.pop();
console.log(strarrr);
strarrr.unshift("graps");
console.log(strarrr);
strarrr.shift()
console.log(strarrr);
let copysstrarr = strarrr.slice(0, 2);
console.log(copysstrarr);
strarrr.splice(1,1);
console.log(strarrr)

// funcation 
function boloname(name){
    console.log(name)
}
boloname("naveed")
boloname("ali")
boloname("hamid")
boloname("awass")
boloname("awakkkss")

function multiplay(a,b){
    let result = a *b 
    return result
}

let answer = multiplay(4,5)
console.log(answer)
console.log(multiplay(2,3)+10)