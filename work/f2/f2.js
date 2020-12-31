//const nam = document.querySelector('.one');
//const surnam = document.querySelector('.surname');
//const ag = document.querySelector('.age');
const np = document.querySelector('.knp');
const result = document.querySelector('span.result');

np.addEventListener('click', goo ) 

function goo(){
let nam = document.querySelector('.name').value,
surnam = document.querySelector('.surname').value,
ag = document.querySelector('.age').value;
 if (ag.substr(-1, 1)  <2) {
    result.innerText = "Привет "+ nam + " " + surnam + " с возрастом " + ag + " год!";
}  else if (ag.substr(-1, 1) < 5) {
    result.innerText = "Привет "+ nam + " " + surnam + " с возрастом " + ag + " года!";
} else if (ag > 4) {
    result.innerText = "Привет "+ nam + " " + surnam + " с возрастом " + ag + " лет!";
} 
}
