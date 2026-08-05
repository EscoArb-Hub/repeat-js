//! Підключення бібліотеки Lodash
console.warn("Бібліотека Lodash: \n https://lodash.com");
console.warn("Підключення бібліотеки Lodash: \n https://www.jsdelivr.com/package/npm/lodash");
console.warn("Підключення бібліотеки Lodash через CDN: \n https://cdnjs.com/libraries/lodash.js");

//? ✴️ CDN (Content Delivery Network) -
//? це географічно розподілена мережева інфраструктура,
//? що забезпечує швидку доставку контенту
//? користувачам веб-сервісів і сайтів.
//? Сервери, що входять до складу CDN,
//? географічно розташовуються таким чином,
//? щоб зробити час відповіді для користувачів
//? сайту/сервісу мінімальним.
//? ✳️ Підключимо до проекту бібліотеку Lodash через CDN.
//? Для цього використаємо сервіс cdnjs.com
//? і додамо посилання на скрипт бібліотеки в кінці HTML-документа
console.log(
    `%c
    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"
        integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer">
    </script>
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------");

//! Подія "scroll"
console.warn('Подія "scroll​:');
//? ✳️ Наприклад, якщо додати слухача події до скролу, 
//? то під час прокручування сторінки мишкою 
//? можна викликати близько 30 подій на секунду. 
//? Повільне прокручування (свайп) у смартфоні може викликати 
//? до 100 подій на секунду. 
//? Якщо обробник події скролу виконує важкі обчислення 
//? та інші DOM-маніпуляції, гарантовано 
//? виникнуть проблеми з продуктивністю.
// const output = document.querySelector(".output-1");
// let scrollEventCounter = 0;

// document.addEventListener("scroll", () => {
//     scrollEventCounter += 1;
//     output.textContent = scrollEventCounter;
//     console.log("scrollEventCounter:", scrollEventCounter); //!
// });
// console.log("-------------------------------------");



//! Використання бібліотеки Lodash (документація)
console.warn("Використання бібліотеки Lodash (документація)): \n https://lodash.com/docs/4.17.15");
console.log("");


//todo: “Math” Methods --> (_.add(augend, addend))
console.log(
    '%c “Math” Methods --> (_.add(augend, addend)) ',
    'color: white; background-color:rgb(0, 136, 100)',
);
console.warn("Використання бібліотеки Lodash (“Math” Methods --> (_.add)): \n https://lodash.com/docs/4.17.15#add");
//? ✳️ Цей метод додає два числа (рахує суму двох чисел).
const sum = _.add(10, 5);
console.log("sum:", sum); //! 15
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");




//! Throttle і Debounce
console.warn("Throttle і Debounce​:");
//? ✴️ У JavaScript концепції throttle (троттлінг)
//? і debounce (дебаунсинг) використовуються
//? для керування частотою виконання функцій
//? - особливо корисні для обробки подій,
//? які можуть відбуватися дуже часто
//? (наприклад, scroll, resize, input, mousemove тощо).

//? ✳️ Throttle і Debounce - це два схожих,
//? але різних за поведінкою прийоми,
//? що дозволяють контролювати ❗️кількість разів❗️,
//? яку ми дозволяємо виконувати функції з часом.
//? Використовуємо їх реалізацію з бібліотеки Lodash.


//! Throttle (обмежувач частоти)
console.warn(`Throttle​​: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_02/images/throttle.png"}`);
//? ❗️❗️❗️ Throttle - функція виконується не частіше,
//?     ніж один раз на заданий інтервал часу N,
//?     навіть якщо подія відбувається частіше.
//? 📌 Використання Throttle:
//? 🔸 Обробка подій прокручування.
//? 🔸 Відстеження переміщення миші.
//? 🔸 Обмеження частоти натискань.

//? ✴️ Прийом throttle контролює кількість разів,
//? яку функція може бути викликана протягом певного проміжку часу.
//? Тобто дозволяє викликати функцію не частіше
//? одного разу за N мілісекунд, гарантуючи її регулярне виконання.
//? ✳️ Використовуючи throttle, ми не контролюємо,
//? як часто браузер буде генерувати події.
//? Ми всього-на-всього беремо контроль
//? над частотою виконання функції обробника події.
//? ✳️ Реалізація з бібліотеки Lodash
//? очікує першим аргументом функцію,
//? яку необхідно «загальмувати»,
//? а другим - кількість мілісекунд.
//? Повертає нову функцію для передачі в слухач події.
// todo: Без Throttle
document.addEventListener(
    "scroll",
    () => {
        console.log("Виклик обробника прокрутки");
    }
);
// todo: З Throttle
document.addEventListener(
    "scroll",
    _.throttle(() => {
        console.log("Виклик обробника прокрутки кожні 300ms");
    }, 300)
);
console.log("-----------------------------------------------------------");



//! Throttle (Scroll me)
// console.warn("Throttle (Scroll me)​:");
// const vanillaOutput = document.querySelector(".part_3 .output.vanilla");
// const throttledOutput = document.querySelector(".part_3 .output.throttled");
// const eventCounter = {
//     vanilla: 0,
//     throttled: 0
// };
// let { vanilla, throttled } = eventCounter;

// document.addEventListener("scroll", () => {
//     vanilla += 1;
//     vanillaOutput.textContent = vanilla;
// });

// document.addEventListener(
//     "scroll",
//     _.throttle(() => {
//         throttled += 1;
//         throttledOutput.textContent = throttled;
//     }, 300)
// );
// console.log("-----------------------------------------------------------");



//! Debounce (відкладений виклик)
console.warn(`Debounce: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE4_02/images/debounce.png"}`);
//? ❗️❗️❗️ Debounce - функцію буде викликано лише після того,
//?     як подія припиниться на заданий час.
//? 📌 Використання Debounce:
//? 🔸 Автопідказки під час введення в поле пошуку.
//? 🔸 Перевірка даних форми.
//? 🔸 Підвантаження даних після того, як користувач перестав друкувати.

//? ✴️ Прийом debounce гарантує, 
//? що функція буде викликана лише у тому разі, 
//? якщо між подіями буде пауза N мілісекунд. 
//? Наприклад, доки користувач скролить сторінку 
//? функція не буде викликана, 
//? але щойно він перестав скролити, 
//? функція буде викликана через 300 мілісекунд. 
//? Якщо скрол відновиться раніше, 
//? ніж через 300 мілісекунд після паузи, 
//? функція не буде викликана.
const vanillaOutput = document.querySelector(".output.vanilla");
const throttledOutput = document.querySelector(".output.throttled");
const debouncedOutput = document.querySelector(".output.debounced");
const eventCounter = {
    vanilla: 0,
    throttled: 0,
    debounced: 0
};
let { vanilla, throttled, debounced } = eventCounter;

document.addEventListener("scroll", () => {
    vanilla += 1;
    vanillaOutput.textContent = vanilla;
});

document.addEventListener(
    "scroll",
    _.throttle(() => {
        throttled += 1;
        throttledOutput.textContent = throttled;
    }, 300)
);

document.addEventListener(
    "scroll",
    _.debounce(() => {
        debounced += 1;
        debouncedOutput.textContent = debounced;
    }, 300)
);
console.log("---------------------------------------------------------");


//! Input (with debounce)
console.warn("Input (with debounce)​:");
const input = document.querySelector(".input");
console.log("input:", input); //!
//todo: Відправка запиту без debounce
// input.addEventListener("input", () => {
//     console.log("Відправка запиту без debounce:", input.value);
// });
//todo: Відправка запиту з debounce
input.addEventListener("input", _.debounce(() => {
    console.log("Відправка запиту з debounce:", input.value);
}, 500));
console.log("---------------------------------------------------------");
