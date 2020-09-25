let link = document.querySelector('a');

link.textContent = 'Developer Mozzila Network';
link.href = 'https://developer.mozilla.org';


// function getStr() {
//     return console.log([].slice(arguments, 1))
// }
// getStr('*', '1', 'b', '1c');


// палиндромм
// const palindrome = name => {
//     console.log(name.toLowerCase() === name.split('').reverse().join('').toLowerCase());
// };
// palindrome('Anna');


// FizzBuzz
// const fizzBuzz = num => {
//     for (let i = 0; i <= num; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('Fizz Buzz');
//         } else if (i % 3 === 0) {
//             console.log('Fizz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else {
//             console.log(i);
//         }
//     }
// };
// fizzBuzz(25);

// Количество гласных
// const glass = str => console.log(str.replace(/[^a|o|u|i|e]/gi, '').length);
//
// glass('anastasia');

// Фибоначчи
// const fibonachi = n => n < 2 ? n : fibonachi(n-1) + fibonachi(n -2);
//
// console.log(fibonachi(9))

// Анаграмма
// const anagrama = (str1, str2) => {
//     console.log(str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join(''));
// };
// anagrama('Nana', 'Anna');

// const prev = document.getElementById("prev");
// const next = document.getElementById("next");
// const slides = document.querySelectorAll(".slide"),
//     dots = document.querySelectorAll(".dot");
//
//
// let index = 0;
//
// const activeSlide = (n) => {
//     for (slide of slides) {
//         slide.classList.remove("active");
//     }
//     slides[n].classList.add("active");
// };
// const activeDot = n => {
//     for (dot of dots) {
//         dot.classList.remove("active");
//     }
//     dots[n].classList.add("active");
// };
// const currentSlide = ind => {
//     activeSlide(ind);
//     activeDot(ind);
// };
// const nextSl = () => {
//     if (index == slides.length-1) {
//         index = 0;
//         currentSlide(index);
//     } else {
//         index++;
//         currentSlide(index);
//     }
// };
// const prevSl = () => {
//     if (index == 0) {
//         index = slides.length-1;
//         currentSlide(index);
//     } else {
//         index--;
//         currentSlide(index);
//         clearInterval(interval);
//     }
// };
//
// dots.forEach((item, i) => {
//     item.addEventListener('click', () => {
//         index = i;
//         currentSlide(index);
//     })
// });
//
// next.addEventListener('click', nextSl);
// prev.addEventListener('click', prevSl);
//
// let interval = setInterval(nextSl, 2000);





// const area = document.getElementById("area");
// let cell = document.getElementsByClassName("cell");
// let move = 0;
// let winIndex = [
//     [0,1,2],
//     [3,4,5],
//     [6,7,8],
//     [0,3,6],
//     [1,4,7],
//     [2,5,8],
//     [0,4,8],
//     [2,4,6]
// ];
// let result = "";
// const cont = document.getElementById("modal_content");
// const modal = document.getElementById("modal");
// const overlay = document.getElementById("overlay");
// const btn = document.getElementById("btn_modal");
//
// for (let i=0; i<9; i++) {
//     area.innerHTML += "<div class='cell' pos=" + i + "></div>"
// }
// area.addEventListener('click', e => {
//     if (e.target.className = "cell") {
//         move % 2 === 0 ? e.target.innerHTML = "X" : e.target.innerHTML = "O";
//         move++;
//         check();
//     }
// });
//
// const check = () => {
//     for (let i=0; i<winIndex.length; i++) {
//         if (cell[winIndex[i][0]].innerHTML=="X" && cell[winIndex[i][1]].innerHTML=="X" && cell[winIndex[i][2]].innerHTML=="X") {
//             result = "крестики";
//             prepareResult(result);
//         }else if (cell[winIndex[i][0]].innerHTML=="O"&&cell[winIndex[i][1]].innerHTML=="O"&&cell[winIndex[i][2]].innerHTML=="O"){
//             result = "нолики";
//             prepareResult(result);
//         }
//     }
// };
//
// const prepareResult = winner => {
//     cont.innerHTML = `Победили ${winner}`;
//     modal.style.display = "block";
// };
//
// const closeModal = () => {
//     modal.style.display = "none";
//     location.reload();
// };
// console.log(overlay);
// overlay.addEventListener('click', closeModal);
// btn.addEventListener('click', closeModal);