/*let arr = [5,8,10,7,9,11]
arr.splice(3,3,17,19,111)
arr.splice(0,0,100)

arr.splice(arr.length,0,1000)
arr.splice(arr.length-1,0,200)
arr.splice(arr.length/2,0,0)

console.log(arr)

let a=20,b=40;
let c
c=a>b?a:b
console.log(c)

function result(){
var input=document.querySelector(".one").value
var resultt=document.querySelector(".p")
var a=[...input].reverse().join("");
console.log(a)
 

if( input==a)
    resultt.innerHTML="palindrome"
else{
    resultt.innerHTML="not a polindrome"
}
}

const { match } = require("assert") 

function result() {
    var unit = Number(document.querySelector(".one").value)
    var resultt = document.querySelector(".two")
    let units = 0
    let a = unit - 50
    let b = unit - 100
    let c = unit - 250

    if (unit <= 50)
        units = unit * 0.75
    else if (unit > 50 && unit <= 100)
        units = 37.5 + a * 1
    else if (unit > 100 && unit <= 250)
        units = 37.5 + 50 + b * 1.30
    else
        units = 37.5 + 50 + 195 + c * 1.50

    //units=Math.round(units)
    resultt.innerHTML = " Your unit is " + units + " INR"
}

let i = 1
while (i <= 10) {
    console.log(i)
    i++
}
do{
    console.log(i)
    i++
}
while(i<=10)

while(true){
    let num=Number(prompt('enter a number'))
    if(!isNaN(num))
    break;
}
//continue     
for (let i=1;i<=10;i++){
    if(i%3==0)
        continue
    console.log(i)
}
//for...of 
var arr = ["apple", "orange","mango","grape","dragonfruit"]
for (let i=0;i<arr.length;i++)
    console.log(arr[i])
for (let arr2 of arr)
    console.log(arr2.toUpperCase())

//for...in
item={
    phone:"iphone",
    quantity:1,
    price:45000
}
for (let item2 in item)
    console.log(item[item2])

// functions and parameter

function find(a=2,b=1){
    return a*b
}
console.log(find(10*234518287382))
//recursion
function factorioal(n){
    if(n==1)
        return 1
    return n*factorioal(n-1)
}
console.log(factorioal(5))

// arrow function
let arr=[1,2,3,4,5]
let find = (arr)=>{
    let sum=0
    //for (let i=0;i<arr.length;i++){
    //    sum+=arr[i]    
    //}
    for (let i of arr){
        sum+=i
    }
    return sum
}
console.log(find(arr))
let area = r =>Math.PI*r*r
console.log(area(18))
//variable arguments
let prod=function(...args){
    let answer=1
    for (let val of args)
        answer*=val
    return answer
}
console.log(prod(1,2,3,4,5,6,7,8,9))
// generator it create one by one
function* generator(){
    let index=1
    while(true){
        yield index++
    }
}
let gen = generator()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
//for each
let ar=["apple","orange","mango"]
ar.forEach(print)
function print(input){
    console.log(input)
}
ar.forEach(input=>console.log(input.toUpperCase()))
// to change original value into caps
ar.forEach((input,index,ar)=>{
    ar[index]=input.toUpperCase()
})
console.log(ar)
let arrr=["IT","ECE","MECH","CIVIL","EEE"]
arrr.forEach(val=>{
    const opt=document.createElement("option")
    opt.textContent=val
    opt.value=val
    document.querySelector("select").appendChild(opt)

})
arrr.forEach(val=>{
    const li=document.createElement("li")
    li.textContent=val
    li.value=val
    document.querySelector("ul").appendChild(li)
})
// map 
let USD=[10,19,56,45]
let INR=USD.map(val=>val*83)
console.log(INR)
let array = [{name:"hari",age:20},{name:"maha",age:18},{name:"babu",age:13}]
let name=array.map(val=>val.name)
console.log(name)
// filter
let bill=[1000,900,500,2000,800,5000]
let lessthan1500=bill.filter(val=>val<1500)
console.log(lessthan1500)
//reduce
let array2d=[["a","b","c"],["d","e","a"],["f","g","d"]]
let count=array2d.flat().reduce((accumulator,val)=>{
    if (accumulator[val])
        accumulator[val]++
    else
        accumulator[val]=1
    return accumulator
}
,{})
console.log(count)
//functions and clouser
function outer(name){
    let out="hi"
    function inner(){
        let inn="hello"
        console.log("iner variable ",inn)
        console.log("outer variable",out)
        console.log("how are you",name)
    }
    return inner
}
let call=outer("hari")
call()
function adder(x){
    return function(y){
        return x+y
    }
}
 let add =adder(10)
 console.log(add(13))
//set
let arr=[1,2,2,3,4,56,7,6,4,0,8,1]
console.log(arr)
let set1=new Set(arr)
set1.add(4)
set1.add(10)
set1.add("hari")
set1.add({name:"hari" , age:20})
set1.delete(1)
console.log(set1)
var arr1=Array.from(set1)
console.log(arr1)
//map 
let map1=new Map()
map1.set("a",1)
map1.set("b",2)
map1.delete(3)
map1.set("c",3)
map1.set("d",4)
console.log(map1)
for (let i of map1){
    console.log(i)
}
for (let [k,v] of map1){
    console.log(k)
}
for (let v of map1.values()){
    console.log(v)
}
map1.forEach((v,k)=>{
    console.log("key name =",k,"value =",v)
})
console.log(...map1)
let maparray =[["a",1],["b",2]]
let map2 =new Map(maparray)
console.log(map2)
console.log(...map2)
// class
class User {
    static noofusers=0
    constructor(name, age) {
        this.name = name;
        this.age = age;
        User.noofusers++
    }
    login() {
        console.log("hi", this.name)
        console.log(" you are logged in")
    }
    logout() {
        console.log(" you are logged out")
    }
    static totalusers(){
        console.log(" total number of users ",+User.noofusers)
    }
}
let user1= new User("hari",20)
let user2= new User("maha",17)
let user3= new User("babu",13)
console.log(user1,user2,user3)
User.totalusers()
// inheritance
class paiduser extends User{
    constructor(name,age){
        super(name,age)
        this.storage=100
    }
    message(){
        console.log(" you have a 100 GB free storage ")
    }
    //overriding
    login(){
        console.log(" thank you for loggin ")
        return this
    }
}
let user4=new paiduser("ram",23)
console.log(user4)
//method chaining
user4.login().message()
function user(name,age){
    this.name=name;
    this.age=age;
}
user.prototype.login=function(){
    console.log("hello",this.name)
    console.log(" you are logged in ")
}
let user1=new user("hari",20)
console.log(user1)
//get and set
class temperature{
    constructor(temp){
        this._temp=temp
    }
    get temp(){
        return `${this._temp} deg celcius`
    }
    set temp(temp){
        if(temp>=100){
            temp=100
        }
        this._temp=temp
    }
}
let temp1=new temperature(50)
temp1.temp=150
console.log(temp1.temp)
//Asynchronous js
console.log(" Hello....")
function step (){
    console.log("step1")
    console.log("step2")
    console.log("step3")
}
step()
for (let i=0;i<=10;i++){
    console.log(i)
}
setTimeout(()=>console.log("step1"),2000)
setTimeout(()=>console.log("step2"),1000)
setTimeout(()=>console.log("step3"),6000)

//setInterval(() =>console.log("hi"));
let date=new Date()
console.log(date)


// promis
let friend1 = new Promise((resolve,reject)=>{
    let reached =true
    if (reached)
        setTimeout(resolve,1000,"hari is reached")
    else
       reject("hari is not reached")
})
let friend2 = new Promise((resolve,reject)=>
{
    let reached =true
    if (reached)
        setTimeout(resolve,2000,"maha is reached")
    else
       reject("maha is not reached")
})
let friend3= new Promise((resolve,reject)=>{
    let reached =false
    if (reached)
        setTimeout(resolve,3000,"babu is reached")
    else
       reject("babu is not reached")
})
//Promise.all([friend1,friend2,friend3])
//.then((message)=>console.log(message))
//.catch((message)=>console.log(message))
//Promise.allSettled([friend1,friend2,friend3])
//.then((message)=>console.log(message))
//.catch((message)=>console.log(message))
Promise.any([friend1,friend2,friend3])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))
//Promise.race([friend1,friend2,friend3])
//.then((message)=>console.log(message))
//.catch((message)=>console.log(message))

//exception handling

try{
    let num=prompt("enter a number")
    if(isNaN(num)){
        throw "enter a valid number not string"
    }
    if(num==""){
        throw "It is look like empty"
    }
    console.log(num*3)
}
catch(error){
    console.log(error)
}
finally{
   console.log("...hello....")
}

//async
let friend1 = new Promise((resolve, reject) => {
    let reached = false
    if (reached)
        setTimeout(resolve, 5000, "hari is reached")
    else
        reject("hari is not reached")
})

async function asynstatus() {
    try {
        console.log("...hi...")
        out = await friend1
        console.log(out)
    }
    catch(error){
        console.log(error)
    }
    finally{
        console.log("this Async and Await")
    }
}
asynstatus()

//JSON
let json1 = {
    "phone": "iphone",
    "price": 80000
}
let json2 = `[
    {
        "phone": "iphone",
        "price": 80000
    },
    {
        "phone": "samsung",
        "price": 80000
    },
    {
        "phone": "nothing",
        "price": 40000
    }
]`
let json=JSON.parse(json2)
console.log(json)
console.log(JSON.stringify(json))

//fetch api
fetch("https://thirukurral.vercel.app/api?num=1000")
let fetch1="https://official-joke-api.appspot.com/random_ten"
fetch(fetch1)
fetch("https://jsonplaceholder.typicode.com/todos",{
    method:"POST",
    headers:{"content-type":"application/json"},
    body:JSON.stringify({
        id:1,
        title:"test",
        completed:"true"
    })
})
.then((res)=>console.log(res.json()))
.then(msg=>msg[0].setup)
.catch((err)=>console.log(err))
// URL to fetch data from
const url = 'https://api.example.com/data';

//Making a GET request
const url = 'https://api.realservice.com/data'; // Replace with your actual API URL

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });*/
