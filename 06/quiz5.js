const $box = document.getElementById('box');
let  offset = {x: 0, y: 0};
let isDown = false;

$box.addEventListener('mousedown', (event) => {
    isDown = true;
    // console.log($box.offsetLeft);
    console.log('mousedown');
    offset.x = $box.offsetLeft - e.clientX;
    offset.y = $box.offsetTop - e.clientY;
});

$box.addEventListener('mouseup', (event) => {
    isDown = false;
    // console.log('mousemove');
});

$box.addEventListener('mousemove', (event) => {
    console.log('mousemove');
    if(!isDown) return;
    console.log(event.clientX, event.clientY);

    $box.style.left = event.clientX -;
    $box.style.top = event.clientY -10;

});
