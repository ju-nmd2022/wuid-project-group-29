/* the following 18 lines of code were adpated from https://www.youtube.com/watch?v=OQZNAMjC6Vg&t=423s accessed: 29-11-2022 */
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];


productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width/2;
    

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

const box = document.getElementById("Inputbox");
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