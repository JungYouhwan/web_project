// main.js

let productNew = [];
    productNew = JSON.parse(localStorage.getItem('newProduct'));
let inventables = [];
    inventables = JSON.parse(localStorage.getItem('invenData'));

    // 상단의 productNew table
    productNew.forEach(function (product) {
      let pro = `
                      <tr>
                        <td class="table-warning">${product.newCode}</td>
                        <td>${product.newName}</td>
                        <td class="table-info">${product.newCate}</td>
                        <td>${product.newPack}</td>
                        <td class="table-secondary">${product.newGrup}</td>
                        <td>${product.newRet}</td>
                        <td class="table-light">${product.newStore}</td>
                      </tr>`
      let productTable = document.querySelector('#product');
      productTable.insertAdjacentHTML('beforeend', pro);
    });
    // 하단의 사진 카드
    productNew.forEach(function (product) {
      let card = `
      <div class="col-sm-6 col-xl-3">
            <div class="card overflow-hidden rounded-2">
              <div class="position-relative">
                <img src=${product.newImage} class="card-img-top rounded-0" alt="...">
                </div>
              <div class="card-body pt-3 p-4">
                <h6 class="fw-semibold fs-4 mb-0">${product.newRet}</h6>
                <div class="d-flex align-items-center justify-content-between">
                  <h6 class="fw-semibold fs-4">${product.newName}</h6>
                </div>
              </div>
            </div>
          </div>
      `
      let productcard = document.querySelector('#prcard');
      productcard.insertAdjacentHTML('beforeend', card);
    });
    let str = '';
    // 재고관리 테이블 데이터
    inventables.forEach(function(item){
        if((item.invenTory - item.invenReal) < 0){
        str += 
                    `<tr>
                        <td class="border-bottom-0 table-info">
                          <h6 class="fw-semibold mb-1">${item.invenCode}</h6>
                        </td>
                        <td class="border-bottom-0 table-warning">
                          <h6 class="fw-semibold mb-1">${item.invenName}</h6>
                        </td>
                        <td class="border-bottom-0 ">
                          <h6 class="fw-semibold mb-1">${item.invenLocat}</h6>
                        </td>
                        <td class="border-bottom-0 table-primary">
                          <h6 class="fw-semibold mb-1">${item.invenTory}</h6>
                        </td>
                        <td class="border-bottom-0 ">
                          <h6 class="fw-semibold mb-1 fs-4">${item.invenReal}</h6>
                        </td>
                        <td class="border-bottom-0 table-danger">
                          <h6 class="fw-semibold mb-1 fs-4">${item.invenTory - item.invenReal}</h6>
                        </td>
                        <td class="border-bottom-0">
                          <div class="d-flex align-items-center gap-2">
                            <span class="badge bg-danger rounded-3 fw-semibold">위험</span>
                          </div>
                        </td>
                      </tr>
                      `
                      let table = document.querySelector('#inventable');
                      table.innerHTML = str;
        }
    });

    // 날짜 데이터ㅋㅎㅋ
    let today = new Date;
    let year = today.getFullYear();
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let day = today.getDate().toString().padStart(2, '0');
    let todays = year + '-' + month + '-' + day;
    document.querySelector('#today').append(todays);