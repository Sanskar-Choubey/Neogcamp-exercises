var button = document.querySelector(".btn");
var inputField = document.querySelector(".input-field");

button.addEventListener('click',function clickHandler(){
    console.log("Clicked");
    console.log("input",inputField.value);
})