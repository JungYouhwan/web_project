// index.js
document.forms.loginFrm.addEventListener('submit', function (e) {
    e.preventDefault();
    let id = document.querySelector('input[name="id"]').value;
    let pw = document.querySelector('input[name="pw"]').value;
    let members = JSON.parse(localStorage.getItem('memberData'));
    let exist = false;
    for (let i = 0; i < members.length; i++) {
      if (members[i].id == id && members[i].password == pw) {
        exist = true;
      }
    }
    if (!exist) {
      console.log(exist)
      alert('아이디 비밀번호를 확인하세요')
    } else  {
      window.location.href = "main.html";
    }
  }

)