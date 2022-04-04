let count = 0;
const span = document.querySelector('h1 span');
// review accessing an element by tag
const clickMeP = documennt.querySelector('p')

//verifying we've accessed the correct tag
console.log(clickMeP.textContent)

//use an event listner to create a behavior for clicking the tag
clickMeP.addEventListener('click', () => {
    console.log('Ive been clicked!!')

// how can I add to the click count?
console.log(span)
console.log(increment(count))
})

const increment = (count) => {
    count ++
}