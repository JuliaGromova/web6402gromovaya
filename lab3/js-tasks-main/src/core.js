/**
 * Функция, проверяющая, является ли число целым, используя побитовые операторы.
 * @param {*} n
 * @returns {boolean}
 */
function isInteger(n) {
    return (n | 0) === n;
}

/**
 * Функция, возвращающая массив четных чисел от 2 до 20 включительно.
 * @returns {number[]}
 */
function even() {
    const result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i);
    }
    return result;
}

/**
 * Функция, считающая сумму чисел до заданного, используя цикл.
 * @param {*} n
 * @returns {number}
 */
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Функция, считающая сумму чисел до заданного, используя рекурсию.
 * @param {*} n
 * @returns {number}
 */
function recSumTo(n) {
    if (n === 1) return 1;
    return n + recSumTo(n - 1);
}

/**
 * Функция, считающая факториал заданного числа.
 * @param {*} n
 * @returns {number}
 */
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

/**
 * Функция, определяющая, является ли число двойкой, возведенной в степень.
 * @param {*} n
 * @returns {boolean}
 */
function isBinary(n) {
    return (n > 0) && ((n & (n - 1)) === 0);
}

/**
 * Функция, находящая N-е число Фибоначчи.
 * @param {*} n
 * @returns {number}
 */
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

/**
 * Функция, возвращающая функцию для выполнения операции.
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @returns {function}
 */
function getOperationFn(initialValue, operatorFn) {
    let value = initialValue;
    return function(newValue) {
        value = operatorFn ? operatorFn(value, newValue) : value;
        return value;
    };
}

/**
 * Функция создания генератора арифметической последовательности.
 * @param {number} start - начальное значение
 * @param {number} step - шаг последовательности
 * @returns {function}
 */
function sequence(start = 0, step = 1) {
    let current = start;
    return function() {
        const result = current;
        current += step;
        return result;
    };
}

/**
 * Функция для глубокого сравнения двух значений или объектов.
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны (по содержанию), иначе false
 */
function deepEqual(firstObject, secondObject) {
    if (firstObject === secondObject) return true;

    if (typeof firstObject === 'number' && typeof secondObject === 'number') {
        return isNaN(firstObject) && isNaN(secondObject);
    }

    if (typeof firstObject !== 'object' || firstObject === null ||
        typeof secondObject !== 'object' || secondObject === null) {
        return false;
    }

    const keysFirst = Object.keys(firstObject);
    const keysSecond = Object.keys(secondObject);

    if (keysFirst.length !== keysSecond.length) return false;

    for (let key of keysFirst) {
        if (!keysSecond.includes(key) || !deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }

    return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
