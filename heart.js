const button = document.getElementById("bu-heart");
const filledHeartIcon = document.getElementById("fa-heart-filled");
const emptyHeartIcon = document.getElementById("fa-heart-empty")
console.log(button);


/* The fav heart will change fa-icon, marked as added to fav */
button.addEventListener('click',
function changeHeart() {
    console.log("heart fill");
    emptyHeartIcon.style.display = 'none';
    filledHeartIcon.style.display = 'block';

})


/* button.addEventListener('click',
function changeHeart() {
    console.log("heart empty");
    emptyHeartIcon.style.display = 'block';
    filledHeartIcon.style.display = 'none'
}) */