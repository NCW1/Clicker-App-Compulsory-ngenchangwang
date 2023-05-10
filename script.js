const counter = document.getElementById('counter');
// const counter = <p id="counter"> 0 </p>

// mutable variable (changes its value over time)
let count = 0;

// increment means add count by 1
function increment() {
	count++;
	counter.textContent = count;
}

// decrement means minus count by 1
function decrement() {
	count--;
	counter.textContent = count;
}

function reset() {
	count = 0;
	counter.textContent = count;
}