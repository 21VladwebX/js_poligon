"use strict"
// function Increment() {
// 	let counter = 0;
// 	// Object.defineProperty(this, '', {
// 	// 	get: function() {
// 	// 		console.log('get!');
// 	// 		return ++counter;
// 	// 	},
// 	// });
// }

class Increment {
	constructor() {
		this.count = 0;
	}
	get getCount() {
		return ++this.count
	}
	set setCount(cnt) {
		this.count = cnt
	}

	showName(text){
		console.log(`${text} - ${this.name}`);
	}
}


// Increment.prototype.valueOf = function() {
//   return this.getCount;
// };

var increment = new Increment()

// debugger
// console.log('val: ' + increment.getCount) // val: 1
// console.log('val: ' + increment.getCount) // val: 2
// console.log('val: ' + increment.getCount) // val: 3

console.log('val: ' + increment) // val: 1
increment.count = 22
// console.log('val: ' + increment.setCount = 22) // val: 2
console.log(increment.count) // val: 3

const newName = {
	name: "Vlad"
}

function bind(fn, context) {
	return (...args) => {
		context.fn = fn
		context.fn(...args);
		delete context.fn;
		return context;
	}
}

const bound = bind(increment.showName, newName);
bound('Hello', 'HI')

//write custom map, filter, reduce, memoization
// document.getElementById('btnWrapper').addEventListener('click',()=>{
// 	console.log('btnWrapper click handle')
// })
// document.getElementById('btn').addEventListener('click',(e)=>{
// 	// debugger
// 	console.log('btn click handle')
// },true)

const arr = [1,2,3,4,5,6,7,8,9]

const map = (arr, cb) =>{
	const result = [];
	if(!!arr.length && typeof cb === 'function'){
		for( let i = 0; i < arr.length; i++){
			result.push(cb(arr[i], i, arr))
		}
		return result;
	}
	throw ('first arg should be an array!')
}

const mapCb = (item => item ** 2)

const newArray = map(arr,mapCb);
console.log(newArray);

const filter = (arr, cb) => {
	const result = [];
	if(!!arr.length && typeof cb === 'function'){
		for( let i = 0; i < arr.length; i++){
			if(cb(arr[i], i, arr)) {
				result.push(arr[i])
			}
		}
		return result;
	}
	throw ('first arg should be an array!')
}

const filterCb = (item => item > 5)
const filteredArray = filter(newArray,filterCb)
console.log(filteredArray)

const reduce = (arr, cb, initVal) => {
	let result = initVal || arr[0];
	if(!!arr.length && typeof cb === 'function'){
		for( let i = 0; i < arr.length; i++){
			result = cb(result, arr[i], i, arr)
		}
		return result;
	}
	throw ('first arg should be an array!')
}
const reduceCb = ((accum,item) => accum += item + 1)
const sumOfArray = reduce(filteredArray,reduceCb, 0)
console.log(sumOfArray)

const memo = (func, cont) =>{
	const cache = [];
	const context = cont || null;
	return (...args) => {
		const key = args.toString()
		// const key2 = JSON.stringify(args)
		if(cache[key]) {
			return cache[key]
		}
		const val = func.call(context,...args)
		cache[key] = val;
		return val;
	}
}

const Developer = {
	salary: 10000,
	name: "John",
	// getSalary() {
	// 	return this.salary
	// }
}
Developer.getSalary = function (month) {
	return this.salary * month;
}

const memoizedGetSalary = memo(Developer.getSalary, Developer);

console.log(memoizedGetSalary(5,3,2))
console.log(memoizedGetSalary(2))
console.log(memoizedGetSalary(2))

console.log(Developer.getSalary.bind(Developer)(6))
