var $board = document.getElementById('board');
var boardCount = 16;
var isWhite = false;
var className = 'black';
var boardLineCount = 4;

var str = '';

for(var i = 0; i< 16 ; i++) {

    className = (isWhite) ? 'black': 'white';
    // if(isName) className = 'black';
    // else className = 'White';

    str  += '<span class="' + className + '"></span>';

    isWhite = !isWhite;

    // if(isWhite) isWhite = false;
    // else isWhite = true;

    if(i % boardlineCount === boardLineCount  -1) {
        isWhite = !isWhite;
    }
}

$board.innerHTML = str;

var $boards = document.querySelectorAll('span');
var boardsLength = $boards.length;
var $select = null;

function select(event) {

    if($select) {
        $select.className = $select.className.replace('select', '');
    }

    var el = event.currentTarget;
    el.className = 'select';
    $select = el;
} 
for(var i =0; i < $board.length; i++) {
    
    $boards [i].addEventListener('click', select);
}