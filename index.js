/*
1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
*/

let number = 2;

while (number < 100) {
   if (isSimpleNumber(number)) {
    console.log(number);
   }
    number++;
}

function isSimpleNumber(number) {
     
    for (let i = 2; i < number; i++){
        if (number % i == 0){
            return false;
        } 
    }       
    return true;
}


/*
2. С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости
 корзины в зависимости от находящихся в ней товаров. 
3. Товары в корзине хранятся в массиве. Задачи:
    a) Организовать такой массив для хранения товаров в корзине;
    b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

// let basketOfGoods = [
// {name:"product1", price:100, amount:3},
// {name:"product2", price:100, amount:1},
// {name:"product3", price:100, amount:2}];

// console.log(countBasketPrice(basketOfGoods));

// function countBasketPrice(basketOfGoods) {
//     let sum = 0;

//     for (let i = 0; i < basketOfGoods.length; i++) {
        
//         sum += basketOfGoods[i].price * basketOfGoods[i].amount;
//     }

//     return sum;
// }

/*
 4. *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла
*/

// for (let i = 0; i < 10; console.log(i++) ) {
    
// }

/*
5. *Нарисовать пирамиду с помощью console.log,
 как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
*/

// let count = "*";
// let i =1;
// while (i <= 20) {
//     console.log(count);
//     count += "*"
//     i++;
// }
