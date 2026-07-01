console.log(
    '%c 1.Події.                    \n   Методи addEventListener() \n   і removeEventListener()​.  ',
    'color: white; background-color: #D33F49',
);



//! Події
//? ✴️ Подія - це сигнал від браузера про те,
//? що на веб-сторінці щось відбулося.
//? Події використовуються для реакції
//? на дії користувача і виконання коду,
//? пов'язаного з певною подією.
//? Існує багато видів подій:
//? 🔸 миші,
//? 🔸 клавіатури,
//? 🔸 елементів форм,
//? 🔸 завантаження зображень,
//? 🔸 буфера обміну,
//? 🔸 зміни стадії CSS анімації або переходу,
//? 🔸 зміни розмірів вікна та багато інших.

//? ✳️ Одна дія може викликати декілька подій.
//? Наприклад, клік викликає спочатку mousedown,
//? а потім mouseup і click.
//? У тих випадках, коли одна дія генерує декілька подій,
//? їхній порядок фіксований.
//? Тобто обробники викликаються
//? у порядку mousedown → mouseup → click.

//! Метод addEventListener()​
console.warn("Метод addEventListener()​:");
//? ✴️ Для того, щоб елемент реагував на дії користувача,
//? до нього необхідно додати слухача (обробника) події.
//? Тобто функцію, яка буде викликана, щойно подія відбулася.
//? ✴️ Метод addEventListener()
//? - додає слухача події на елемент.
//? 🔸 event - ім'я події, рядок, наприклад "click".
//? 🔸 handler - колбек-функція, яка буде викликана під час настання події.
//? 🔸 options - необов'язковий об'єкт параметрів з розширеними налаштуваннями.
console.log(
    `%c
    🔹 елемент.слухач(подія, реакція на подію);
            ⬇️   ⬇️   ⬇️   ⬇️   ⬇️   ⬇️
    🔸 element.addEventListener(event, handler, options);
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo:
const button1 = document.querySelector(".my-button-1");
console.log("button1:", button1);

button1.addEventListener(
    "click",
    () => {
        console.log("My button-1 was clicked");
    }
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✴️ Для колбека можна (і бажано)
//? використовувати окрему функцію
//? і передавати на неї посилання.
//? Іменована функція підвищує читабельність коду.
const button2 = document.querySelector(".my-button-2");
console.log("button2:", button2);

const handleClick1 = () => {
    console.log("My button-2 was clicked");
    alert("My button-2 was clicked");
    button2.classList.toggle("accent");
};

button2.addEventListener("click", handleClick1);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✴️ На одному елементі може бути 
//? будь-яка кількість обробників подій, 
//? навіть подій одного типу. 
//? Колбек-функції будуть викликатися 
//? у порядку їх реєстрації в коді.
const button3 = document.querySelector(".my-button-3");
console.log("button3:", button3);

const firstCallback = function () {
    alert('First callback!')
}

// const add = function () {
// console.log("Це функція 'add'");
// };
// const firstCallback = () => alert('First callback!');
const secondCallback = () => alert('Second callback!');
const thirdCallback = () => alert('Third callback!');

button3.addEventListener("click", firstCallback);
button3.addEventListener("click", secondCallback);
button3.addEventListener("click", thirdCallback);
console.log("---------------------------------------------------------------------------------");


//! Метод removeEventListener()​
console.warn("Метод removeEventListener()​​:");
//? ✴️ Видаляє слухача події з елемента.
//? Аргументи аналогічні методу addEventListener().
//? ✴️ Для видалення потрібно передати посилання 
//? саме на ту колбек-функцію, 
//? яка була призначена в addEventListener(). 
//? У такому разі, для колбеків 
//? використовують окрему функцію 
//? і передають її за ім'ям (посиланням).
console.log(
    `%c
    🔸 element.removeEventListener(event, handler, options);
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


const addListenerBtn = document.querySelector('.js-add');
const removeListenerBtn = document.querySelector('.js-remove');
const clickBtn = document.querySelector(".js-target-btn");

console.log("addListenerBtn:", addListenerBtn);
console.log("removeListenerBtn:", removeListenerBtn);
console.log("clickBtn:", clickBtn);

const handleClick2 = () => {
    console.log("click event listener callback");
    alert("click event listener callback");
    clickBtn.classList.toggle("accent");
};

addListenerBtn.addEventListener("click", () => {
    clickBtn.addEventListener("click", handleClick2);
    console.log("click event listener was added to clickBtn");
});

removeListenerBtn.addEventListener("click", () => {
    clickBtn.removeEventListener("click", handleClick2);
    console.log("click event listener was removed from clickBtn");
});
console.log("---------------------------------------------------------------------------------");


//! Об'єкт події
console.warn("Документація об'єкта події: \n http://devdocs.io/dom/event");
//? ✴️ Щоб обробити подію - недостатньо знати про те,
//? що це клік або натискання клавіші,
//? можуть знадобитися деталі.
//? Наприклад, поточне значення текстового поля,
//? елемент, на якому відбулася подія, вбудовані методи та інші.
//? ✴️ Кожна подія - це об'єкт,
//? який містить інформацію про деталі події
//? та автоматично передається першим аргументом
//? в обробник події.
//? Всі події відбуваються з базового класу Event.
const button11 = document.querySelector(".button11");
console.log("button11:", button11);

const handleClick11 = event => {
    console.log(event);
};

button11.addEventListener("click", handleClick11);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✴️ Параметр event - це і є об'єкт події,
//? який автоматично передається першим аргументом
//? під час виклику колбек-функції.
//? Ми можемо називати його як завгодно,
//? але, як правило, його оголошують як e, evt або event.
//? ✳️ Деякі властивості об'єкта події:
//? 🔸 event.type - тип події.
//? 🔸 event.target - це той елемент, на якому фактично відбулася подія
//?    (наприклад, клацання миші, натискання клавіші і т.д.).
//? 🔸 event.currentTarget - це той елемент, на якому обробник події був встановлений,
//?    тобто елемент, до якого прив'язана функція addEventListener
const button12 = document.querySelector(".button12");
console.log("button12:", button12);

const handleClick12 = event => {
    console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");
    // console.log("event: ", event);
    console.log("event type(button2): ", event.type);
    console.log("event target(button2): ", event.target);
    console.log("event currentTarget(button2): ", event.currentTarget);
};

button12.addEventListener("click", handleClick12); //! event.target завжди співпадає з event.currentTarget
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");


const parent = document.querySelector(".box");
console.log("parent:", parent);

const handleClick3 = event => {
    console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");
    // console.log("event: ", event);
    console.log("event type(parent): ", event.type);
    console.log("event target(parent): ", event.target);
    console.log("event currentTarget(parent): ", event.currentTarget);
};

parent.addEventListener("click", handleClick3); //! event.target може не співпадати з event.currentTarget
console.log("-----------------------------------------------------");
