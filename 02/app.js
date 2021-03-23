// console.log('app');


// //Create
// var todos = ['운동'];
// var todo = '게임';
// todos.push(todo);
// console.log(todos); //todos에 게임이 추가되어 찍힘

// //forEach 메소드
// //Read

// todos.forEach(function(todo){

//     console.log(todo);
// });

// //Update
// var todos = ['운동', '게임'];
// var updateTodo ='게임';
// var updateIndex = todos.findIndex(function(todo) {
//     return todo === updateTodo;
// });
// console.log(updateIndex);
// //
// var todos = ['운동', '게임'];
// var updateTodo ='게임';
// var updateIndex = todos.findIndex(function(todo) {
//     return todo === updateTodo;
// });
// var [updateIndex] = '공부';
// console.log(todos);
// //
// var words = ['a', 'b', 'c'];
// var newWords = words.map(function(word)  {
//     return word + 'ok';
// });
// console.log(newWords); // "a ok", "b, ok", "c,ok"
// //
// var todos = ['운동', '게임'];
// var updateTodo ='게임';

// var newTodos = todos.map(function(todo) {
//     if (todo === updateTodo) {
//         return '공부';
//     }
//     return todo;
// });

// //splice 기존 요소를 삭제 또는 교체하거나 새 요소를 추사하여 배열의 내용을 변경
// var words = ['a', 'b', 'c'];
// console.log(words.splice(0, 1));
// console.log(words);

// //Delete
// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo) {
//     return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos); // "운동", "목욕"

// //배열은 참조타입
// var a = { x: 1 };
// var b = a;
// b.x = 2;
// console.log(a,b); //값이 카피되는 것이 아닌 메모리의 특정주소 레퍼런스만 카피

// //반복문
// var isMan = true;
// if(isMan) {
//     console.log('1');
// }
// else if(!isMan && isHero){

// }
// else {
//     console.log('2');
// }
// //
// // alert('안녕하세요');
// var who = prompt('당신은 누구세요?');
// console.log(who);

// var nick = 'aji';
// function test() {
//     var age =30;
//     console.log(nick, age);
// }

// test();

// function sum(a, b) {
//     return a+b; //return 안 해주면 안나옴
// }
// console.log(sum(1, 2));

// var car = {
//     year: '2014',
//     starting: function() {
//         console.log('starting..');
//     }

// };

// car.starting();

// //즉시 실행 함수
// (function() {
//     var a = 'a';
//     console.log(a);
// })();

// function sum(x, y) {
//     if (!y) y =1;
//     console.log(x + y);
// }
// console.log(sum(3));
// console.log(sum(3, 3));

// var text = 'abc def ghi abc def'; // 대상 문자열
// var testReg = /abc/; //찾을 문자열
// var result = testReg.test(text);
