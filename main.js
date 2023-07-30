let btn = document.getElementById("btn");
let Input = document.getElementById("email");
let validMsg = document.getElementById("msg");
let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let usermail = document.getElementById("useremail");
let dimissmsg = document.getElementById("button");
btn.onclick = ()=>{
if(Input.value == ''){
Input.style.border = '1px solid red';
validMsg.style.display = 'block'
}else{
Input.style.border = '1px solid grey';
validMsg.style.display = 'none';
usermail.innerHTML = Input.value;
Input.value = '';
container.style.display = 'none'
container2.style.display = 'block'
document.body.style.background = 'hsl(234, 29%, 20%)';
dimissmsg.onclick = ()=>{
container.style.display = 'flex'
container.style.cssText = 'display:flex-direction: column;'
container2.style.display = 'none'
document.body.style.background = 'white';
}
}
}
