const product1 = { price: 10, title: 'JS od podstaw' };
const product2 = { price: '20', title: 'PHP od podstaw' };
const product3 = { price: '20', title: 'PHP od podstaw'}
const discount = 10;

//add products to table
const itemsContainer = document.querySelector('#items')
let conuter = 1;
function addItem(item){
itemsContainer.innerHTML += `   <tr>
         <td>${conuter++}</td>
        <td>${item.title}</td>
        <td>1</td>
        <td>${item.price}</td>
      </tr>`;

}
addItem(product1)
addItem(product2)

// add discount
const discountContainer= document.querySelector('#discount-amount')
discountContainer.innerHTML = discount

if(discount === 0){
//document.querySelector('#discount').style.display ='none'
document.querySelector('#discount').classList.add('hidden')
}

if (isNaN (+ product2.price)){
    console.log('Podano niepoprwany typ danych')
}

const total = + product1.price + + product2.price;
const totalWithDiscount = total - 10;

document.querySelector('#total-price').innerHTML = total

console.log(`Cena przed znizka:  ${total} 
    Cena po znizce: ${total}`);
