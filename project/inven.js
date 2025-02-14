// inven.js

let invenData = JSON.parse(localStorage.getItem('invenData'));
let login = JSON.parse(localStorage.getItem('login'));
document.querySelector('#loginname').textContent = ' 안녕하세요. ' + login.name + '님';
inventable();
// 처음 테이블 그려주기.
function inventable() {
    let str = '';
    invenData.forEach(function (inven) {
        str += `
  <tr>
  <td class="table-secondary">${inven.invenCode}</td>
  <td class="table-warning">${inven.invenName}</td>
  <td>${inven.invenLocat}</td>
  <td class="table-primary">${inven.invenTory}</td>
  <td>${inven.invenReal}</td>
  ${inven.invenTory-inven.invenReal < 0 ? `<td class="table-danger">${inven.invenTory-inven.invenReal}</td>`: `<td class="table-light">${inven.invenTory-inven.invenReal}</td>`}
  </tr>`
    })
    let target = document.querySelector('#table');
    target.innerHTML = str;
};


let invenCodeber = document.querySelector('#infoCodeber');
let invenCode = document.querySelector('#infoCode');
let invenName = document.querySelector('#infoName');
let invenLocat = document.querySelector('#infoLocat');
let invenTory = document.querySelector('#infoTory');
let invenReal = document.querySelector('#infoReal');

// 값 input에 보여주기
document.querySelector('#infoCodeBtn').addEventListener('click', function () {
    invenData.forEach(function (item) {
        if (infoCodeber.value == item.invenCode) {
            infoCode.value = item.invenCode;
            infoName.value = item.invenName;
            infoLocat.value = item.invenLocat;
            infoTory.value = item.invenTory;
            infoReal.value = item.invenReal;
        };
    })
});
// input값을 추가 버튼 클릭 시 등록
document.querySelector('#addBtn').addEventListener('click', function () {

    let code = document.querySelector('#addCode').value;
    let name = document.querySelector('#addName').value;
    let locat = document.querySelector('#addLocat').value;
    let tory = document.querySelector('#addTory').value;
    let real = document.querySelector('#addReal').value;

    for(let i = 0; i < invenData.length; i++){
        if (invenData[i].invenCode != code) {
            let insert = {
                invenCode: code,
                invenName: name,
                invenLocat: locat,
                invenTory: tory,
                invenReal: real
            };
            invenData.splice(0, 0, insert);
            localStorage.setItem('invenData', JSON.stringify(invenData));
        
            document.querySelector('#addCode').value = '';
            document.querySelector('#addName').value = '';
            document.querySelector('#addLocat').value = '';
            document.querySelector('#addTory').value = '';
            document.querySelector('#addReal').value = '';
            inventable();
            return;
        }else{
            alert('똑같은 코드번호가 있습니다.');
            return;
        }
    }
});

// 수정버튼
document.querySelector('#infoBtn').addEventListener('click', function () {
    let code = infoCode.value;
    let name = infoName.value;
    let locat = infoLocat.value;
    let tory = infoTory.value;
    let real = infoReal.value;


    let insert = {
        invenCode: code,
        invenName: name,
        invenLocat: locat,
        invenTory: tory,
        invenReal: real
    };
    invenData.forEach(function (item, idx) {
        if (infoCode.value == item.invenCode) {
            invenData.splice(idx, 1, insert);
            localStorage.setItem('invenData', JSON.stringify(invenData));
        }

        document.querySelector('#infoCodeber').value = '';
        document.querySelector('#infoCode').value = '';
        document.querySelector('#infoName').value = '';
        document.querySelector('#infoLocat').value = '';
        document.querySelector('#infoTory').value = '';
        document.querySelector('#infoReal').value = '';

        inventable();
    });
});

// 삭제 버튼
document.querySelector('#removeBtn').addEventListener('click', function () {
    invenData.forEach(function (item, idx) {
        if (infoCodeber.value == item.invenCode) {
            invenData.splice(idx, 1);
            localStorage.setItem('invenData', JSON.stringify(invenData));

            document.querySelector('#infoCodeber').value = '';
            document.querySelector('#infoCode').value = '';
            document.querySelector('#infoName').value = '';
            document.querySelector('#infoLocat').value = '';
            document.querySelector('#infoTory').value = '';
            document.querySelector('#infoReal').value = '';
            inventable();
        }
        

    });
});