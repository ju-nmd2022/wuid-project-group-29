let box = document.getElementById("Inputbox");
const navtext = document.getElementById("navtext");
console.log(box);


box.addEventListener('mouseover',
function myHover() {
    console.log("working");
    navtext.style.display = 'none';
})


box.addEventListener('mouseout',
function myHover() {
    console.log("working");
    navtext.style.display = 'block';
})