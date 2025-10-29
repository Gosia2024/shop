const product1 = { price: 10, title: 'JS od podstaw' };
const product2 = { price: '20', title: 'PHP od podstaw' };
const discount = 10;

//add products to table
const itemsContainer = document.querySelector('#items')
itemsContainer.innerHTML += `   <tr>
        <td>${product1.title}</td>
        <td>1</td>
        <td>${product1.price}</td>
      </tr>`
itemsContainer.innerHTML += ` <tr>
        <td>${product2.title}</td>
        <td>1</td>
        <td>${product2.price}</td>
      </tr>
`


if (isNaN (+ product2.price)){
    console.log('Podano niepoprwany typ danych')
}

const total = + product1.price + + product2.price;
const totalWithDiscount = total - 10;

document.querySelector('#total-price').innerHTML = total

console.log(`Cena przed znizka:  ${total} 
    Cena po znizce: ${total}`);
