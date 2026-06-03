//! Контекст виконання функції
console.warn("Контекст виконання функції:");
//? ✴️ Можна з упевненістю сказати, що ключове слово this
//? - це одна з найзаплутаніших концепцій JavaScript на старті навчання.
//? Новачки часто підставляють this методом наукового тику доти,
//? доки скрипт не спрацює.
//? ✳️ Контекст у JavaScript схожий на контекст у реченні:
//? 🔸 Петро біжить швидко, тому що ❗️Петро❗️ намагається зловити поїзд.
//? 🔸 Петро біжить швидко, тому що ✅він✅ намагається зловити поїзд.
//? ✳️ Друге речення звучить лаконічніше. 
//? Підмет речення - Петро, і ми можемо сказати, 
//? що контекст речення - це Петро, 
//? тому що він у центрі уваги у цей конкретний час у реченні. 
//? Навіть займенник «хто» стосується Петі.

//? ✳️ І так само об'єкт може бути поточним контекстом виконання функції.
console.log(
    `%c
    🔴 Петро біжить швидко, тому що ❗️Петро❗️ намагається зловити поїзд.
    `,
    'color: blue; font-size: 16px',
);

const petro1 = {
    username: "Petro",
    showName() {
        console.log(petro1.username);
    },
};
petro1.showName();
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");



//? ✳️ Звернення до властивостей об'єкта
//? всередині методів, використовуючи ім'я самого об'єкта,
//? - аналогічно використанню Петро, замість він.
//? ✳️ Всередині функцій можна використовувати 
//? зарезервоване ключове слово this.
//? Під час виконання функції, в this записується 
//? посилання на об'єкт, в контексті якого вона була викликана. 
//? Таким чином, в тілі функції ми можемо отримати доступ 
//? до властивостей і методів цього об'єкта.
console.log(
    `%c
    🟢 Петро біжить швидко, тому що ✅він✅ намагається зловити поїзд.
    `,
    'color: blue; font-size: 16px',
);

const petro2 = {
    username: "Petro",
    showName() {
        console.log(this.username);
    },
};
petro2.showName();
console.log("---------------------------------------------------------------------------------------------");


const pavlo1 = {
    username: "Pavlo1",
    // showName() {
    //     console.log(pavlo1.username);
    // },
};

Object.assign(pavlo1, {
    showName() {
        console.log(pavlo1.username);
    },
});
console.log("✅pavlo1-after:", pavlo1);

pavlo1.showName();


const arrayNamePavlo = [
    {
        username: "PavloA",
    },
    {
        username: "PavloB",
    },
    {
        username: "PavloC",
    },
    {
        username: "PavloD",
    },
    {
        username: "PavloF",
    }

]

const showObject = function () {
    arrayNamePavlo.forEach(element => console.log(element))
}
showObject()
// arrayNamePavlo.forEach(element => console.log(element))

console.log("перший елемент", arrayNamePavlo[0])
// Object.assign(arrayNamePavlo[0], {

//     showName() {
//         console.log(arrayNamePavlo[0].username);
//     },
// });
// showObject()

// arrayNamePavlo[0].showName()


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
for (let i = 0; i < arrayNamePavlo.length; i++) {
    Object.assign(arrayNamePavlo[i], {

        showName() {
            console.log(arrayNamePavlo[i].username);
        },
    });
}

showObject()
arrayNamePavlo[0].showName()

for (let index = 0; index < arrayNamePavlo.length; index++) {
    // const element = array[index];
    arrayNamePavlo[index].showName()

}

arrayNamePavlo.forEach(element => element.showName())

console.log("Задача 2")

// до кожної властивості об'єкту додати властивість showName
const objectNamePavlo = {
    pavloA: { username: "PavloA" },
    pavloB: { username: "PavloB" },
    pavloC: { username: "PavloC" },
    pavloD: { username: "PavloD" },
    pavloF: { username: "PavloF" }
}

Object.assign(objectNamePavlo.pavloA, {
    showName() {

        console.log("❗️:", pavloA.username);
    },
});


const { pavloA, pavloB, pavloC, pavloD, pavloF } = objectNamePavlo;
console.log("pavloA:", pavloA)
console.log("objectNamePavlo:", objectNamePavlo)
pavloA.showName();


[
    pavloA,
    pavloB,
    pavloC,
    pavloD,
    pavloF
].forEach(obj => {
    const username = obj.username;

    obj.showName = () => {
        console.log("❗️", username);
    };
});

pavloA.showName(); 
pavloB.showName(); 
pavloC.showName();
pavloD.showName();
pavloF.showName();

console.log("objectNamePavlo:", objectNamePavlo)