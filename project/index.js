// index.js


let membersData = JSON.parse(localStorage.getItem('memberData'));

// let loginBtn = document.querySelector('#loginBtn');
// 로그인 아이디 체크
document.forms.loginFrm.addEventListener('submit', function (e) {
  e.preventDefault();
  let id = document.querySelector('input[name="id"]').value;
  let pw = document.querySelector('input[name="pw"]').value;
    for (let i = 0; i < membersData.length; i++) {
      if(membersData[i].id == id && membersData[i].pw == pw){
        alert(`환영합니다.${membersData[i].name} 님`);
        let loginid = membersData[i].id;
        let loginpw = membersData[i].pw;
        let loginname = membersData[i].name;
        let login = {id:loginid, pw:loginpw, name:loginname};
        localStorage.setItem('login', JSON.stringify(login));
        window.location.href = "main.html";
        exist = true;
        return;
      }
    }
    alert('아이디 비밀번호를 확인하세요');
  })

   // 회원가입.
   document.querySelector('#memberBtn').addEventListener('click',function(e) {
    e.preventDefault();
    let id = document.querySelector('input[name=id]').value;
    let pw = document.querySelector('input[name=pw]').value;
    let name = document.querySelector('input[name=name]').value;

    // 아이디 중복 체크 후 생성
    for(let i = 0; i < membersData.length; i++) {
      if(membersData[i].id != id){
        let memberss = {id , pw, name};
        membersData.push(memberss);
        localStorage.setItem('memberData', JSON.stringify(membersData));
        document.querySelector('input[name=id]').value = '';
        document.querySelector('input[name=pw]').value = '';
        document.querySelector('input[name=name]').value = '';
        alert("회원가입이 완료되었습니다.");
        window.location.href = "index.html";
        return;
      }else {
        alert('같은 아이디가 존재합니다.');
        return;
      }
    }
    console.log('회원가입 완료');
  });


  // 비밀번호 찾기
  let searchid = document.querySelector('#searchid');
  let searchBtn = document.querySelector('#searchBtn');

  searchBtn.addEventListener('click', function() {
    for(let i=0; i < membersData.length; i++) {
      if(membersData[i].id == searchid.value){
        document.querySelector('#pws').value = membersData[i].pw;
        document.querySelector('#names').value = membersData[i].name;
      }
    }
  })
  

