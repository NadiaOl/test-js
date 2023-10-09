
// №1.1.1 Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
function checkRealNumber(num) {
    if(num > 0) {
       return console.log("Число більше 0")
    } else if(num < 0) {
        return console.log("Число меньше 0")
    } else {
        return console.log("Число дорівнює 0")
    }
}
checkRealNumber(5)

// №1.1.2 Дана строка. Выведите в консоль длину этой строки.
function getStringLength(str) {
    return console.log(str.length)
}
getStringLength("hello")


// №1.1.3 Дана строка. Выведите в консоль последний символ строки.
function getLastSymbol(str) {
    return console.log(str.slice([length-1]))
}
getLastSymbol("hello")

// №1.1.4 Дано число. Проверьте, четное оно или нет.
function checkNumber (num) {
    num%2 ? console.log("Число не парне") :  console.log("Число парне")
}
checkNumber(10)

// №1.1.5 Даны два слова. Проверьте, что первые буквы этих слов совпадают.
function compareFirstLetters(a, b) {
    a.charAt(0).toLowerCase() === b.charAt(0).toLowerCase() ? console.log(`Перші літери слів ${a} та ${b} співпадають`) : console.log(`Перші літери слів ${a} та ${b} різні`)
}
compareFirstLetters('hello', "Harry")

// №1.1.6  Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву.
function getLastLetter(str) {
    str.slice([length-1]) === "ь" ? console.log(str.slice([length-2], [length-1])) : console.log(str.slice([length-1]))

}
getLastLetter("консоль")

// №1.2.1 Дано число. Выведите в консоль первую цифру этого числа.
function getFirstNumber(num) {
    const firstNumber = num.toString().charAt(0)
    console.log(Number(firstNumber))
}
getFirstNumber(125)

// №1.2.2 Дано число. Выведите в консоль последнюю цифру этого числа.
function getLastNumber(num) {
    const lastNumber = num.toString().slice([length-1])
    console.log(Number(lastNumber))
}
getLastNumber(125)

// №1.2.3 Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
function getSumFirstAndLastNumber (num) {
    const firstNumber = num.toString().charAt(0)
    const lastNumber = num.toString().slice([length-1])
    console.log(Number(firstNumber)+Number(lastNumber))
}
getSumFirstAndLastNumber(125)

// №1.2.4 Дано число. Выведите количество цифр в этом числе.
function numberOfSymbols(num) {
    console.log(num.toString().length)
}
numberOfSymbols(12345)

// №1.2.5 Даны два числа. Проверьте, что первые цифры этих чисел совпадают.
function compareTwoNumbers(a, b) {
    const first = a.toString().charAt(0)
    const second = b.toString().charAt(0)
    console.log(Number(first) === Number(second))
}
compareTwoNumbers(125, 1258)

// №1.3.1 Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.
function getPenultLetter(str) {
    str.length>1 ? console.log(str.slice([length-2], [length-1])) : console.log("У стоці замало символів")
}
getPenultLetter("hello!")

// №1.3.2Даны два целых числа. Проверьте, что первое число без остатка делится на второе.
function compareNumbers(a, b) {
    console.log(a % b === 0)
}
compareNumbers(4, 2)

// №1.4.1 Выведите в консоль все целые числа от 1 до 100.
function getAllNumbersAscending () {
    for (let i = 1; i < 101; i++) {
        console.log(i)
    }
}
// getAllNumbersAscending()

// №1.4.2  Выведите в консоль все целые числа от -100 до 0.
function getAllNegativeNumbersAscending () {
    for (let i = -100; i < 1; i++) {
        console.log(i)
    }
}
// getAllNegativeNumbersAscending()

// №1.4.3 Выведите в консоль все целые числа от 100 до 1.
function getAllNumbersDescending (){
    for (let i = 100; i > 0; i-=1) {
        console.log(i)
    }
}
// getAllNumbersDescending()

// №1.4.4 Выведите в консоль все четные числа из промежутка от 1 до 100.
function getAllEvenNumbers () {
    for (let i = 1; i < 101; i++) {
        if( i % 2 === 0 ){
            console.log(i)
        }
    }
}
// getAllEvenNumbers()

// №1.4.5  Выведите в консоль все числа кратные трем в промежутке от 1 до 100
function getAllNumbersMultipleOfThree () {
    for (let i = 1; i < 101; i++) {
        if( i % 3 === 0 ){
            console.log(i)
        }
    }
}
// getAllNumbersMultipleOfThree()

// №1.5.1 Найдите сумму всех целых чисел от 1 до 100.
function getSum () {
    let sum = 0
    for (let i = 1; i < 101; i++) {
        sum += i
    }
    console.log(sum)
}
getSum()

// №1.5.2 Найдите сумму всех целых четных чисел в промежутке от 1 до 100.
function getEvenSum () {
    let sum = 0
    for (let i = 1; i < 101; i++) {
        if( i % 2 === 0 ){
            sum += i
        }
    }
    console.log(sum)
}
getEvenSum()

// №1.5.3 Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.
function getOddSum () {
    let sum = 0
    for (let i = 1; i < 101; i++) {
        if( i % 2 !== 0 ){
            sum += i
        }
    }
    console.log(sum)
}
getOddSum()

// №1.5.4 Даны два целых числа. Найдите остаток от деления первого числа на второе.
function getRemainderOfDivision (a, b) {
    console.log(a % b)
}
getRemainderOfDivision(4, 3)

// №1.5.5 Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.
function getReverseSymbols(str) {
    const symbolArr = str.split("").reverse()
    for (let i = 0; i < symbolArr.length; i++) {
        console.log(symbolArr[i])
    }
}
getReverseSymbols("hello")
