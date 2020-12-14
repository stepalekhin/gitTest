const frt = document.querySelector('.one');
const tw = document.querySelector('.two');
const np = document.querySelector('.knp');
const result = document.querySelector('span.result');


let clearInput = () => {
frt.value = '';
tw.value = '';
}

let results = () => {
result.innerText = frt.value * tw.value
};

np.addEventListener('click', () => clearInput(results()));
