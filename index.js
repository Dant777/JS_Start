
/*1. Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: 
{‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с 
помощью console.log и вернуть пустой объект.

*/

printObjNumber();

function printObjNumber() {

    for (let i = 0; i < 1001; i++) {
        
        if (i < 999) {
            const numberArr = createNumberArr(i);
            console.log(createObjNumber(numberArr));
        }else{
            console.log({})
        }
        
    }
}

function createObjNumber(numberArr) {
    const strArr = ["единицы", "десятки", "сотни"];
    let objNumber = {};
    for (let i = 0; i < numberArr.length; i++) {
        
        objNumber[strArr[i]] = numberArr[i];
    }
    return objNumber;
}

function createNumberArr(number) {
    let x = number;
    let i = 10;
    let numberArr = [];
    if(x == 0){
        numberArr.push(x);
        return numberArr;
    }
    while (x >= i / 10)
    {
        const a = x % i;
        const b = x % (i / 10);
        const c = (i/10);
        const number = (a - b) /c;
        numberArr.push(number);
        i *= 10;
    }

    return numberArr;
}
