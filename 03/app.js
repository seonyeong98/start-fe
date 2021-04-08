// var link = document.querySelector('#link');
// link.addEventListener('click',function(){
//     console.log(11111);
//    // event.stopPropagation();
//    event.preventDefault(); 

// }); 

// var list = document.querySelector('#list');
// console.log(list.children);

// var app = document.getElementById('list');

// app.addEventListener('click', function (event) {
//     if (event.target.nodeName == 'LI') {
//         //한개의 event리스너로 모든 li에 click이벤ㅌ 등록과 비슷
//         console.log('li');
//     }
//     event.stopPropagation();
// });  
// document.body.addEventListener('click', function() {
//     console.log('body');
// });

// for (var i = 0; i<list.childern.length; i++){
//     console.log(list.children[i]);
//     list.children[i].addEventListener('click',function(){
//         console.log(1)
//     });
// }
// var clickCount = 0;
// function popup(event){
//     console.log(++clcickCount);
//     console.log(arguments, this , event , event.type,event.currentTarget);
// }
// document.body.addEventListener('click',popup);

// function clickBody() {
//     console.log('click');
// }

// document.querySelector('.box').addEventListener('click',clickBody);

// document.body.addEventListener('click', function() {
//     console.log('click');
// });
// console.log(window.outerWidth);
// console.log(window.name);
//window.open('http://www.daum.net');
//location.href='http://www.daum.net';
// history.back();//이전페이지로
// navigator//현재의 브라우저 정보를 갖고 있음

//dom(documentobjectmodel)

//var debug = document.getElementById('debug');
//console/log(debug);
//calss는 여러개 있어도 되지만 
// var box = document.qu erySelector('#debug');
// console.log(box);

//var box = document.querySelector('.box');
//var box2 = document.querySelectorAll('.box');
//console.log(box2);

//dom 생성 함수
// 

const span = document.createElement('span');
const textNode = document.createTextNode('hello!');
span.appendChild(textNode);
document.querySelector('#debug').appendChild(span);

//dom 제거
var debug = document.getElementById('debug');
//debug.remove(); 

const list = document.getElementById('list');
list.removeChild(list.children[0]);

//Event





























