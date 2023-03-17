
const body = document.body
body.append("Hello World", " " ,"Bye"); //with help of append we can append all ot These
// body.appendChild("Hello World"); //Div,span,anchor tag

// How to append Div in Html Root element
const div = document.createElement("div");
// add text to div
div.innerHTML = "Hello Dom"

body.append(div);


// div.textContent = "Hello world 5"



// Differeence between Inner Text and Inner Content

const strong = document.createElement('strong');
strong.innerText = " Hello Js";

div.append(strong);




// const div = document.querySelector('div');
// console.log(div.textContent);
// console.log(div.innerText);