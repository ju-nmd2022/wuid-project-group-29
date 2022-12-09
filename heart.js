let isHeartFull = false;

window.addEventListener('load', function () {
const button = document.getElementById("bu-heart");
const filledHeartIcon = document.getElementById("fa-heart-filled");
const emptyHeartIcon = document.getElementById("fa-heart-empty")
console.log(button);

// clicking the fav button
button.addEventListener('click', function() {
    // checking if added to fav
    if (isHeartFull === true) {
        // emptying it - removing from fav
        console.log("heart empty");
        emptyHeartIcon.style.display = 'block';
        filledHeartIcon.style.display = 'none';
        isHeartFull = false;
    
    }
    else {
        // filling it - adding to fav
        console.log("heart fill");
        emptyHeartIcon.style.display = 'none';
        filledHeartIcon.style.display = 'block';

        isHeartFull = true;
       
    }
})
});
