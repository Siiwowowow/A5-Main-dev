document.getElementById('main-btn').addEventListener('click',function(){
    alert('Board Update Succesfully');
    let taskNumber=parseInt(document.getElementById('assign-number').innerText);
    if(taskNumber>0){
        taskNumber=taskNumber-1
        this.disabled=true;
    }
    else{
        taskNumber=0
        this.disabled=false;
    }
    document.getElementById('assign-number').innerText = taskNumber;
    //add nav-number 
    let navNumber=parseInt(document.getElementById('nav-number').innerText)
    if(navNumber>0){
        nav=navNumber + 1;
    }
    else{
        nav=0
    }
    document.getElementById('nav-number').innerText=nav;
//    add massage  
let divStory=document.getElementById('history-massage');
let time=new Date();
let formateTime=time.toLocaleTimeString();
divStory.innerHTML=
`<p
style="background-color: #4A90E2;
color: white;
padding: 10px;
margin: 10px 0;
border-radius: 10px";>
You have completed the task Fix Mobile Button Issue</b> at ${formateTime}
</p>`   

})
//remove history
document.getElementById('clear-btn').addEventListener('click',function() {
    document.getElementById('history-massage').innerHTML = '';
})

// card2----
document.getElementById('main-btn1').addEventListener('click',function(){
    alert('Board Update Succesfully');
    let taskNumber=parseInt(document.getElementById('assign-number').innerText);
    if(taskNumber>0){
        task=taskNumber-1
        this.disabled=true;
    }
    else{
        task=0
        this.disabled=false;
    }
    document.getElementById('assign-number').innerText = task;
    // nav bar number 
    let navNumber=parseInt(document.getElementById('nav-number').innerText)
    if(navNumber>0){
        navNumber=navNumber + 1;
    }
    else{
        navNumber=0
    }
    document.getElementById('nav-number').innerText=navNumber;
//    add massage  
const divStory=document.getElementById('history-massage1');
let time=new Date();
let formateTime=time.toLocaleTimeString();
divStory.innerHTML=
`<p
style="background-color: #4A90E2;
color: white;
padding: 10px;
margin: 10px 0;
border-radius: 10px";>
You have completed the task Add Dark Mode at ${formateTime}
</p>`   

})
//remove history
document.getElementById('clear-btn').addEventListener('click',function() {
    document.getElementById('history-massage1').innerHTML = '';
})
// card3  ///////////////
document.getElementById('main-btn3').addEventListener('click',function(){
    alert('Board Update Succesfully');
let taskNumber=parseInt(document.getElementById('assign-number').innerText);
if(taskNumber>0){
    taskNumber=taskNumber - 1;
    this.disabled=true;
}
else{
    taskNumber=0;
    this.disabled=false;
}
document.getElementById('assign-number').innerText=taskNumber;
///add nav-number
let navNumber=parseInt(document.getElementById('nav-number').innerText)
if(navNumber>0){
   nav=navNumber + 1;
}
else{
    nav=0;
}
document.getElementById('nav-number').innerText=nav;
// add msg  
let divStory=document.getElementById('history-massage3');
let time=new Date();
let formateTime=time.toLocaleTimeString();
divStory.innerHTML=
`<p
style="background-color: #4A90E2;
color: white;
padding: 10px;
margin: 10px 0;
border-radius: 10px";>
You have completed the task Optimize Home page</b> at ${formateTime}
</p>`
})
document.getElementById('clear-btn').addEventListener('click',function() {
    document.getElementById('history-massage3').innerHTML = '';
})
// card-4////////////
document.getElementById('main-btn4').addEventListener('click',function(){
    alert('Board Update Succesfully');
let taskNumber=parseInt(document.getElementById('assign-number').innerText);
if(taskNumber>0){
    taskNumber=taskNumber - 1;
    this.disabled=true;
}
else{
    taskNumber=0;
    this.disabled=false;
}
document.getElementById('assign-number').innerText=taskNumber;
///add nav-number
let navNumber=parseInt(document.getElementById('nav-number').innerText)
if(navNumber>0){
   nav=navNumber + 1;
}
else{
    nav=0;
}
document.getElementById('nav-number').innerText=nav;
// add msg  
let divStory=document.getElementById('history-massage4');
let time=new Date();
let formateTime=time.toLocaleTimeString();
divStory.innerHTML=
`<p
style="background-color: #4A90E2;
color: white;
padding: 10px;
margin: 10px 0;
border-radius: 10px";>
You have completed the task Add new emoji 🤲 at ${formateTime}
</p>`
})
document.getElementById('clear-btn').addEventListener('click',function() {
    document.getElementById('history-massage4').innerHTML = '';
})
// card--5
document.getElementById('main-btn5').addEventListener('click',function(){
    alert('Board Update Succesfully');
let taskNumber=parseInt(document.getElementById('assign-number').innerText);
if(taskNumber>0){
    taskNumber=taskNumber - 1;
    this.disabled=true;
}
else{
    taskNumber=0;
    this.disabled=false;
}
document.getElementById('assign-number').innerText=taskNumber;
///add nav-number
let navNumber=parseInt(document.getElementById('nav-number').innerText)
if(navNumber>0){
   nav=navNumber + 1;
}
else{
    nav=0;
}
document.getElementById('nav-number').innerText=nav;
// add msg  
let divStory=document.getElementById('history-massage5');
let time=new Date();
let formateTime=time.toLocaleTimeString();
divStory.innerHTML=
`<p
style="background-color: #4A90E2;
color: white;
padding: 10px;
margin: 10px 0;
border-radius: 10px";>
You have completed the task Integrate OpenAI API at ${formateTime}
</p>`
})
document.getElementById('clear-btn').addEventListener('click',function() {
    document.getElementById('history-massage5').innerHTML = '';
})
// card-6\\\\\
document.getElementById('main-btn6').addEventListener('click',function(){
    alert('Board Update Succesfully');
    alert('congrates!!! You have completed all the current task');
let taskNumber=parseInt(document.getElementById('assign-number').innerText);
if(taskNumber>0){
    taskNumber=taskNumber - 1;
    this.disabled=true;
}
else{
    taskNumber=0;
    this.disabled=false;
}
document.getElementById('assign-number').innerText=taskNumber;
///add nav-number
let navNumber=parseInt(document.getElementById('nav-number').innerText)
if(navNumber>0){
   nav=navNumber + 1;
}
else{
    nav=0;
}
document.getElementById('nav-number').innerText=nav;
// add msg  
let divStory=document.getElementById('history-massage6');
let time=new Date();
let formateTime=time.toLocaleTimeString();
divStory.innerHTML=
`<p
style="background-color: #4A90E2;
color: white;
padding: 10px;
margin: 10px 0;
border-radius: 10px";>
You have completed the task Improve Job searching at ${formateTime}
</p>`
})
document.getElementById('clear-btn').addEventListener('click',function() {
    document.getElementById('history-massage6').innerHTML = '';
})
// new page  

document.getElementById('discover-box').addEventListener('click',function(){
    window.location.href="./index2.html"
})
///date update part
function updateDate() {
    let Today = new Date();
    let formattedDate = Today.toDateString();   
    document.getElementById('date-box').innerText = formattedDate;
}

updateDate();

