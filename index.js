// index.js
let members = [
  {id: 'user01', pw: '1111', name:'홍길동'},
  {id: 'user02', pw: '2222', name:'김민서'},
  {id: 'user03', pw: '3333', name:'최유진'},
]
let member_json = JSON.stringify(members);
// 회원정보.
localStorage.setItem('members', member_json);













// 연습
let name = 'HongKildong';
localStorage.setItem('name', 'Hongkildong');
// console.log(localStorage.getItem('name'));
// json 문자열.
let json = `{
"name": "Hongkoldong",
"age": 20}`
// 문자열 -> 객체
let obj = JSON.parse(json);
// console.log(json, obj);
// obj.name, obj.age

localStorage.setItem('friend', json);
let info = localStorage.getItem('friend');
// JSON.parse하면 JSON문자열에서 개체타입으로 바뀜
// console.log(JSON.parse(info)['age']); // 문자열 -> 객체.

localStorage.setItem('friend2', obj);
info = localStorage.getItem('friend2');
// console.log(info.name);

// 객체 -> 문자열.
obj = {
  name: '홍길동',
  friend:[{
    name: '김민수',
    phone: '010-1111'
  }, {
    name: '박현수',
    phone: '010-2222'
  }]
}
json = JSON.stringify(obj); // 객체 -> 문자열.
// console.log(json);
localStorage.setItem('myfriend', json);

// console.log(localStorage.getItem(''));
