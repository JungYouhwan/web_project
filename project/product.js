// product.js

let productData = JSON.parse(localStorage.getItem('productData'));
let login = JSON.parse(localStorage.getItem('login'));
  document.querySelector('#loginname').textContent = ' 안녕하세요. ' + login.name + '님';
protable();

function protable() {
  let str = ''
  productData.forEach(function (product) {
    str += `
  <tr>
  <td class="table-secondary">${product.productCode}</td>
  <td class="table-warning">${product.productName}</td>
  <td>${product.productCate}</td>
  <td class="table-primary">${product.productPack}</td>
  <td>${product.productGrup}</td>
  <td class="table-light">${product.productRet}</td>
  <td class="table-success">${product.productStore}</td>
  </tr>`
  })
  let target = document.querySelector('#table');
  target.innerHTML = str;
};


let infoCodeber = document.querySelector('#infoCodeber');
let infoCode = document.querySelector('#infoCode');
let infoName = document.querySelector('#infoName');
let infoCate = document.querySelector('#infoCate');
let infoPack = document.querySelector('#infoPack');
let infoGrup = document.querySelector('#infoGrup');
let infoRet = document.querySelector('#infoRet');
let infoStore = document.querySelector('#infoStore');

// 값 input에 보여주기
document.querySelector('#infoCodeBtn').addEventListener('click', function () {
  productData.forEach(function (item) {
    if (infoCodeber.value == item.productCode) {
      infoCode.value = item.productCode;
      infoName.value = item.productName;
      infoCate.value = item.productCate;
      infoPack.value = item.productPack;
      infoGrup.value = item.productGrup;
      infoRet.value = item.productRet;
      infoStore.value = item.productStore;

    };
  })
});
// input값 등록버튼 클릭 시 등록
document.querySelector('#addBtn').addEventListener('click', function () {

  let code = document.querySelector('#addCode').value;
  let name = document.querySelector('#addName').value;
  let cate = document.querySelector('#addCate').value;
  let pack = document.querySelector('#addPack').value;
  let grup = document.querySelector('#addGrup').value;
  let ret = document.querySelector('#addRet').value;
  let store = document.querySelector('#addStore').value;
  
  // 중복 검사 (코드중복X)
  for(let i = 0; i < productData.length; i++){
    if (productData[i].productCode != code) {
      let insert = {
        productCode: code,
        productName: name,
        productCate: cate,
        productPack: pack,
        productGrup: grup,
        productRet: ret,
        productStore: store
      };
  
      productData.splice(0, 0, insert);
      localStorage.setItem('productData', JSON.stringify(productData));
  
      document.querySelector('#addCode').value = '';
      document.querySelector('#addName').value = '';
      document.querySelector('#addCate').value = '';
      document.querySelector('#addPack').value = '';
      document.querySelector('#addGrup').value = '';
      document.querySelector('#addRet').value = '';
      document.querySelector('#addStore').value = '';
      alert('등록완료.');
      protable();
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
  let cate = infoCate.value;
  let pack = infoPack.value;
  let grup = infoGrup.value;
  let ret = infoRet.value;
  let store = infoStore.value;

  let insert = {
    productCode: code,
    productName: name,
    productCate: cate,
    productPack: pack,
    productGrup: grup,
    productRet: ret,
    productStore: store
  };
  productData.forEach(function (item, idx) {
    if (infoCode.value == item.productCode) {

      productData.splice(idx, 1, insert);
      localStorage.setItem('productData', JSON.stringify(productData));

      document.querySelector('#infoCodeber').value = '';
      document.querySelector('#infoCode').value = '';
      document.querySelector('#infoName').value = '';
      document.querySelector('#infoCate').value = '';
      document.querySelector('#infoPack').value = '';
      document.querySelector('#infoGrup').value = '';
      document.querySelector('#infoRet').value = '';
      document.querySelector('#infoStore').value = '';
      protable();
    }
  });
});

// 삭제 버튼
document.querySelector('#removeBtn').addEventListener('click', function () {


  productData.forEach(function (item, idx) {
    if (infoCodeber.value == item.productCode) {
      productData.splice(idx, 1);
      localStorage.setItem('productData', JSON.stringify(productData));

      document.querySelector('#infoCodeber').value = '';
      document.querySelector('#infoCode').value = '';
      document.querySelector('#infoName').value = '';
      document.querySelector('#infoCate').value = '';
      document.querySelector('#infoPack').value = '';
      document.querySelector('#infoGrup').value = '';
      document.querySelector('#infoRet').value = '';
      document.querySelector('#infoStore').value = '';
      protable();
    }
  });
});