console.log(`=====1=====`);
// 1a
const button1 = document.querySelector(`button`);
console.dir(button1);

// 1b
button1.onclick = function () {
    alert(`You clicked the first button! Congrats!`)
}

console.log(`=====2=====`);

// 2a
const h3 = document.querySelector(`h3`);
console.dir(h3);

// 2b
h3.addEventListener(`mouseover`, () => {
    alert(`You hovered over the h3 element! Congrats!`);
});

console.log(`=====3=====`);

// 3a
const form = document.querySelector(`form`);
console.dir(form);

// 3b
form.addEventListener(`submit`, function(v) {
    v.preventDefault();

    const input = form.elements.entry.value;
    alert(input);

    form.elements.entry.value = ``;
});

console.log(`=====4=====`);

// BONUS
// 4a
const darkMode = document.getElementById(`dm`);
console.dir(darkMode);

// 4b
const html = document.querySelector('html');
// OR
// const html = document.querySelectorAll(`*`);
darkMode.addEventListener(`click`, () => {
    html.classList.toggle(`dark-mode`);
});

console.log(`=====5=====`);

// 5a
const times = document.querySelector(`#times`);
console.dir(times);

// 5b
let num = 1;
times.addEventListener(`click`, function () {
    if (num < 3) {
        alert(`You clicked the last button! Congrats!`);
        num++;
    } else if (num === 3) {
        alert(`OH NO! This button is NOT going to work anymore`);
        num++;
    }
});