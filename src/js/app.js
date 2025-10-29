const product1 = { price: 10 };
const product2 = { price: 'fasdf' };
const discount = 10;



if (isNaN (+ product2.price)){
    console.log('Podano niepoprwany typ danych')
}

const total = + product1.price + + product2.price;
const totalWithDiscount = total - 10;



console.log(`Cena przed znizka:  ${total} 
    Cena po znizce: ${total}`);
