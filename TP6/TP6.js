// ex1
// const select = document.getElementById("color");
// const div = document.getElementById("div");
// select.addEventListener("change", () => {
//     const selectedColor = select.value;
//     switch (selectedColor) {
//       case "jaune":
//         div.style.backgroundColor = "yellow";
//         break;
//       case "rouge":
//         div.style.backgroundColor = "red";
//         break;
//       case "vert":
//         div.style.backgroundColor = "green";
//         break;
//       case "noir":
//         div.style.backgroundColor = "black";
//         break;
//       default:
//         div.style.backgroundColor = ""; 
//     }
// });
// ex2
// const button = document.getElementById("myButton");
// const message = document.getElementById("message");

// button.addEventListener("click", () => {
//     message.textContent = "Le bouton a été cliqué !";
// });
// button.addEventListener("mouseover", () => {
//     document.body.style.backgroundColor = "yellow";
// });
// button.addEventListener("mouseout", () => {
//     document.body.style.backgroundColor = "white";
// });
// ex3
const image = document.getElementById("image")
const button = document.getElementById("button")
const input = document.getElementById("input")
image.addEventListener("click",()=>{
    alert("vous avez cliquer deux fois sur l’image");
})
button.addEventListener("click",()=>{
    input.textContent = "";
})
input.addEventListener("blur",()=>{
    if(input.value.length < 9){
        input.style.border = "1px solid red";
    }
});