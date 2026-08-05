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
