// №1.6.1. Дан массив с числами. Найдите сумму квадратов элементов этого массива.
function getSumOfSquares(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]**2
    }
console.log(sum)
}
getSumOfSquares([2, 3, 4])//29

// №1.6.2 Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
function getSumOfSquareRoots(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += Math.sqrt(arr[i])
    }
console.log(sum)
}
getSumOfSquareRoots([4, 9, 16])//9

// №1.6.3 Дан массив с числами. Найдите сумму положительных элементов этого массива.
function getSumOfPositiveNumbers(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            sum += arr[i]
        }
    }
console.log(sum)
}
getSumOfPositiveNumbers([2, 15, -16, 0, -22])//9

// №1.6.4 Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
function getSumOfNumbers(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0 && arr[i] < 10 ) {
            sum += arr[i]
        }
    }
console.log(sum)
}
getSumOfNumbers([2, 15, -16, 0, -22, 6, 8, -15, 20, 3, 10])//19


// №1.7.1 Дана строка: 'abcde'  Получите массив букв этой строки.
function getArr(str) {
    console.log(str.split(''))
}
getArr('abcde')

// №1.7.2 Дано некоторое число: 12345 Получите массив цифр этого числа.
function getArrfromNumber (num) {
    console.log(num.toString().split(''))
}
getArrfromNumber(12345)

// №1.7.3 Дано некоторое число: 12345 Переверните его: 54321
function getReversemNumber (num) {
    console.log(Number(num.toString().split("").reverse().join("")))
}
getReversemNumber(12345)


// №1.7.4 Дано некоторое число: 12345  Найдите сумму цифр этого числа.
function getSumofNumbers(num) {
    let sum = 0
    const arr = num.toString().split("")
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]);
    }
console.log(sum)
}
getSumofNumbers(12345)

// №1.8.1 Заполните массив целыми числами от 1 до 10.
function getNewArr() {
    const arr =[]
    for (let i = 1; i < 11; i++) {
        arr.push(i)
    }
    console.log(arr)
}
getNewArr()

// №1.8.2  Заполните массив четными числами из промежутка от 1 до 100.
function getNewEvenArr() {
    const arr =[]
    for (let i = 1; i < 101; i++) {
        if(i%2 === 0) {
            arr.push(i)
        }
    }
    console.log(arr)
}
getNewEvenArr()

// №1.8.3  Дан массив с дробями: [1.456, 2.125, 3.32, 4.1, 5.34] Округлите эти дроби до одного знака в дробной части.
function getToFixArr (arr) {
    console.log(arr.map((item) => item.toFixed(1)))
}

getToFixArr([1.456, 2.125, 3.32, 4.1, 5.34])

// №1.9.1  Дан массив со строками. Оставьте в этом массиве только те строки, которые начинаются на http://.
function getStrStartsWith (arr) {
    let newArray=[]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].startsWith('http://')) {
            newArray.push(arr[i])
        }
    }
console.log(newArray)
}
getStrStartsWith(['http://www.aaa.com', 'https://ccc.bbb.com', 'http://ddd.yyy.com','http://iii.kkk.com', 'https://lll.lll.com',])


// №1.9.2  Дан массив со строками. Оставьте в этом массиве только те строки, которые заканчиваются на .html.
function getStrEndstsWith (arr) {
    let newArray=[]
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].endsWith('.html')) {
            newArray.push(arr[i])
        }
    }
console.log(newArray)
}
getStrEndstsWith(['http://www.aaa.html', 'https://ccc.bbb.html', 'http://ddd.yyy.com','http://iii.kkk.com', 'https://lll.lll.html',])

// №1.9.3 Дан массив с числами. Увеличьте каждое число из массива на 10 процентов
function getMultiplyArr(arr) {
console.log(arr.map((item) => Number((item*1.1).toFixed(2))))
}
getMultiplyArr([2, 5, 6, 10])

// №1.10.1 Заполните массив случайными числами из промежутка от 1 до 100.
function getRandomNumbers () {
    return Math.floor(Math.random() * 100) + 1
}
function getArrayOfRandomNumbers (arrLength) {
    let newArr =[]
    while (newArr.length < arrLength) {
      newArr.push(getRandomNumbers())
    }
    console.log('newArr', newArr)
}
getArrayOfRandomNumbers(10)

// №1.10.2 Дано некоторое число: 12345 Выведите в консоль все его символы с конца.
function getReverseNumber (num) {
    const arr = num.toString().split("").reverse()
    for (const item of arr) {
        console.log(item)
    }
}
// getReverseNumber(12345)

// №1.10.3 Дан некоторый массив, например, вот такой: [1, 2, 3, 4, 5, 6]
// По очереди выведите в консоль подмассивы из двух элементов нашего массива:
// [1, 2]
// [3, 4]
// [5, 6]

function getSubarrays(array) {
    let subArrays =[]
    for (let i = 0; i < array.length; i+=2) {
        subArrays.push([array[i], array[i+1]])
    }
    for (const item of subArrays) {
        console.log(item)   
    }
}
getSubarrays([1, 2, 3, 4, 5, 6])

// №1.10.4 Даны два массива: let arr1 = [1, 2, 3]; let arr2 = [4, 5, 6];
// Слейте эти массивы в новый массив:
// [1, 2, 3, 4, 5, 6]

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

function getConcatArray (a, b) {
    console.log(a.concat(b)) 
//    або
    console.log([...a, ...b])
}
getConcatArray(arr1, arr2)