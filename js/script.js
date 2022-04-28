// Task 1 - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const returnNumber = (arr) => {
    let res = 0;
    for (const arrElement of arr) {
        res += arrElement;
    }

    return res / arr.length
};

const arr = [3, 5, 7, 3, 9];
console.log(returnNumber(arr));

// Task 2 - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

const returnSmallestNumber = (...res) => {
    let min = res[0];
    let max = res[0];

    for (const re of res) {
        if (re < min) {
            min = re;
        }
    }

    for (const re of res) {
        if (re > max) {
            max = re;
        }
    }

    console.log(max);

    return min;
};

console.log(returnSmallestNumber(3, 4, 6, 7, 2));

// Task 3 - створити функцію яка заповнює масив рандомними числами

const fillRandomNumbers = (amount) => {
    let newArr = [];

    for (let i = 0; i < amount; i++) {
        const randomNumber = Math.round(Math.random() * 100);
        newArr.push(randomNumber);
    }

    console.log(newArr);
};

fillRandomNumbers(10);

// Task 4 - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

const fillRandomNumbersTwo = (amount, limit) => {
    let newArr = [];

    for (let i = 0; i < amount; i++) {
        const randomNumber = Math.round(Math.random() * limit);
        newArr.push(randomNumber);
    }

    console.log(newArr);
};

fillRandomNumbersTwo(10, 50);

// Task 5 - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

const newArray = (...res) => {
    let newArr = [];
    const oldArr = res.reverse();

    for (const oldArrElement of oldArr) {
        newArr.push(oldArrElement);
    }

    return newArr;
};

console.log(newArray(1, 2, 3));

// Переробити на стрілочні функції з попереднього дз

// Task 1 - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const calculatesSquareRectangle = (a, b) => a * b;

console.log(calculatesSquareRectangle(3, 5));

// Task 2 - створити функцію яка обчислює та повертає площу кола з радіусом r

const calculatesSquareCircle = (r) => {
    const res = Math.PI * r;
    return res.toFixed(2);
}

console.log(calculatesSquareCircle(10));

// Task 3 - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const calculatesSquareCylinder = (h, r) => {
    const res = (Math.PI * 2) * h * r;
    return res.toFixed(2);
}

console.log(calculatesSquareCylinder(10, 5));

// Task 4 - створити функцію яка приймає масив та виводить кожен його елемент

const showEachElementsArray = (...arr) => {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

showEachElementsArray(4, 5, 2, 7, 8);

// Task 5 - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const showText = (text) => document.write(`<p>${text}</p>`);

showText('Hello Roman! How are you?');

// Task 6 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const showListText = (text) => {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

showListText('Homer');

// Task 7 - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const showListTextAnother = (text, amount) => {
    document.write('<ul>');
    for (let i = 0; i < amount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

showListTextAnother('Lila', 4);

// Task 8 - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const buildsList = (...arr) => {
    document.write('<ul>');
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`);
    }
    document.write('</ul>');
}

buildsList(2, 3, 'Roman', 'Ivan', false, true);

// Task 9 - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const showPerson = (persons) => {
    document.write('<div>');
    for (const person of persons) {
        document.write(`<p>${person.id}) My name is ${person.name}, I'm ${person.age} years old.</p>`);
    }
    document.write('</div>');
}

const persons = [
    {id: 1, name: 'Roman', age: 29},
    {id:2, name: 'Ivan', age: 22},
    {id: 3, name: 'Petro', age: 25}
];

showPerson(persons);

// Task 10 - створити функцію яка повертає найменьше число з масиву

const returnLeastNumber = (...res) => {
    let min = res[0];

    for (const re of res) {
        if (re < min) {
            min = re;
        }
    }

    return min;
}

console.log(returnLeastNumber(3, 5, 7, 2, 4 ));

// Task 11 - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const calc = (...numbers) => {
    let res = 0;

    for (const number of numbers) {
        res += number;
    }

    return res;
}

console.log(calc(2, 1, 7));

// Task 12 -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

const changeArray = (obj) => {
    let newArr = [];
    let oldArr = obj.reverse();

    for (const item of oldArr) {
        newArr.push(item);
    }

    return newArr;
}

const personsArr = [
    {name: 'Roman', age: 29},
    {name: 'Ivan', age: 26}
];

console.log(changeArray(personsArr));