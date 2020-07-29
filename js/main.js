
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
// debugger
// console.log('val: ' + increment.getCount) // val: 1
// console.log('val: ' + increment.getCount) // val: 2
// console.log('val: ' + increment.getCount) // val: 3

console.log('val: ' + increment) // val: 1
increment.count = 22
// console.log('val: ' + increment.setCount = 22) // val: 2
console.log(increment.count) // val: 3


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
	if(!!arr.length){
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
