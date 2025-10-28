// ===== FUNCTIONS WITH NO PARAMETERS ===== //

const Output1 = document.querySelector("#output1");

function Say_Hello(){
    Output1.innerHTML = "Hello Naldo! Welcome to Javascript 101 again";
}

function Show_Today_Date(){
    Output1.innerHTML = Date()
}

function Get_Motivation(){
    Output1.innerHTML = "Just do it";
}

function Show_Who_You_Rep(){
    Output1.innerHTML = "The Rock";
}




// ===== FUNCTIONS WITH PARAMETERS ===== //

const Output2 = document.querySelector("#output2");

function Add(x,y){
    Output2.innerHTML = `The sum of ${x} + ${y} = ${x+y}`;
}

function Greed(name){
    Output2.innerHTML = `Hello, ${name}! 👋 Welcome to the world of JavaScript.`;
}
function Calculate_Area_Rectangle(width, height){
    Output2.innerHTML = `The area of a ${width}x${height} rectangle is ${width * height} square units`;
}
function Show_Favorite_Color(){
    
}






// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //

document.querySelector("#Say_Hello_BTN").addEventListener("click", Say_Hello);
document.querySelector("#Show_Today_Date_BTN").addEventListener("click", Show_Today_Date);
document.querySelector("#Motivation_BTN").addEventListener("click", Get_Motivation);
document.querySelector("#Show_Rep_BTN").addEventListener("click", Show_Who_You_Rep);