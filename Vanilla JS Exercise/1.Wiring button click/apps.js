var button = document.querySelector(".btn");
var inputField = document.querySelector(".input-field");
var outputField = document.querySelector(".output-field");

button.addEventListener('click',function clickHandler(){
    console.log("Clicked");
    
    var output = inputField.value;
    outputField.innerText = output;
})