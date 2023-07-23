// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
console.log(`Сумма: ${sum(5, 5)}`);
console.log(`Разность: ${difference(10, 20)}`);
console.log(`Умножение: ${multiplication(2, 5)}`);
console.log(`Деление: ${segmentation(50, 5)}`);

function sum(number1, number2) {
    return number1 + number2;
}

function difference(number1, number2) {
    if (number1 > number2) {
        return number1 - number2;
    } else if (number1 == number2) {
        return 0;
    } else {
        return number2 - number1;
    }
}

function multiplication(number1, number2) {
    return number1 * number2;
}

function segmentation(number1, number2) {
    return number1 / number2;
}