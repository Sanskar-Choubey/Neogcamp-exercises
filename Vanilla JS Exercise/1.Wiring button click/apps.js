var button = document.querySelector(".btn");
var inputField = document.querySelector(".input-field");
var outputField = document.querySelector(".output-field");

button.addEventListener('click',function clickHandler(){
    console.log("Clicked");
    
    var output = inputField.value;
    outputField.innerText = output;

    // this is the section that contains  the changes happedn
    <p>This is the changed part</p>
})