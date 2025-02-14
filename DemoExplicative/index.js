// function microonde(plat, temps_de_cuissson) {
//     console.log("Plat en train d'être réchauffé...")
//     return new Promise(function (resolve, reject) {
//         setTimeout(reject("Microonde en panne"), temps_de_cuissson * 1000)
//     })
// }

// microonde("Poulet", 2).then(function () {
//     console.log("Plat chaud !")
//     return fetch('https://jsonplaceholder.typicode.com/todos/1')
// }).then(function (response) {
    
// }).then(() => {

// }).catch((error) => {
//     console.error(error)
// });

// async function run() {
//     await microonde("Poulet", 3)
//     console.log("Plat chaud !")
// }

// run();

// Fonctions nommées
function salutations(param1, param2) {
    // console.log(param1, param2)
}

const salutations2 = function(param1, param2) {
    
} 

setTimeout(salutations, 1);

// Fonctions anonymes
setTimeout(function () {}, 1);

(function () {
    // console.log('Hello')
})();

const salutations3 = (param1, param2) => {

}

// Fonctions fléchées
// const addition = (n1, n2) => {
//     return n1 + n2
// }

// Return implicite, dans le cas d'une ligne de code dans la fonction
const addition = (n1, n2) => n1 + n2

console.log(addition(1,2))

// Manipulation du DOM

const containerOfParagraphs = document.querySelector('#liste_pragraphes');

const newParagraph = document.createElement('p');
newParagraph.textContent = "Second paragraphe";

containerOfParagraphs.appendChild(newParagraph);