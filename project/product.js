// product.js

let productData = JSON.parse(localStorage.getItem('productData'));



productData.forEach(function(product){
  let str = `         
                      
                      <tr>
                        <td>${product.productCode}</td>
                        <td class="table-warning">${product.productName}</td>
                        <td>${product.productCate}</td>
                        <td>${product.productPack}</td>
                        <td>${product.productGrup}</td>
                        <td class="table-light">${product.productRet}</td>
                        <td class="table-success">${product.productStore}</td>
                      </tr>`
  let target = document.querySelector('table');
  target.insertAdjacentHTML('beforeend', str);
});
