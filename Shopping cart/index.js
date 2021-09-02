/*
2. Реализовать модуль корзины. Создать блок товаров и блок корзины. У каждого товара есть кнопка «Купить», 
при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа.
*/
const totalCostCart = document.getElementById("totalCost");
let countCost = 0;

function addInCart (cost) {
    countCost += cost;
    totalCostCart.innerHTML = countCost;
}