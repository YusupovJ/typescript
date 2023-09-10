// 1

// Ваша задача состоит в том, чтобы создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.

// function descendingOrder(n: number): number {
// 	const arrayOfN: string[] = n.toString().split("");
// 	const sortedArrayOfN: string[] = arrayOfN.sort((a, b) => +b - +a);
// 	const result: number = parseInt(sortedArrayOfN.join(""));

// 	return result;
// }

// console.log(descendingOrder(12345678));

/* ------------------------------------ */

// 2

// Изограмма — это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, определяющую, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорировать регистр букв.

// function isIsogram(str: string): boolean {
// 	if (str) {
// 		// Получаем массив букв из строки
// 		const arrayOfStr: string[] = str.toLowerCase().split("");

// 		// Фильтруем массив
// 		const result: number = arrayOfStr.filter((char, index, arr) => {
// 			return arr.indexOf(char, index + 1) > -1;
// 		}).length;

// 		return result === 0;
// 	}

// 	return true;
// }

// console.log(isIsogram("ava"));

/* ------------------------------------ */

// 3

// Проверьте, содержит ли строка одинаковое количество «x» и «o». Метод должен возвращать логическое значение и не учитывать регистр. Строка может содержать любой символ.

// function xo(str: string) {
// 	let xreg = /x/gi,
// 		oreg = /o/gi;

// 	let xLength = str.match(xreg)?.length,
// 		oLength = str.match(oreg)?.length;

// 	return xLength === oLength;
// }

// console.log(xo("xo"));

/* ------------------------------------ */

// 4

// Исключить все значение массива, которые повторяются

// const arr: number[] = [1, 2, 3, 4, 4, 5, 5, 6, 45, 6, 23, 4, 23, 41, 23, 23, 123];
//
// const withoutRepeat = (arr: any[]) => {
// 	const unique: any[] = [];
// 	const repeated: any[] = []
//
// 	arr.forEach((item, index, array) => {
// 		if (array.indexOf(item, index + 1) === -1 && repeated.indexOf(item) === -1) {
// 			unique.push(item)
// 		} else {
// 			repeated.push(item)
// 		}
// 	});
//
// 	return unique;
// }
//
// console.log(withoutRepeat(arr));

/* ------------------------------------ */

// 5

// Функция map для массива

const myMap = (array: any[], callback: (value: any, index: number, array: any[]) => any) => {
	const stack: any[] = [];

	for (let i = 0; i < array.length; i++) {
		const el = array[i];
		const newElement = callback(el, i, array);
		stack.push(newElement);
	}

	return stack;
};

const newArray: number[] = myMap([1, 2, 3, 4], (item, index, array) => {
	return { item, index, array };
});

console.log(newArray);
