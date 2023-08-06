'use strict'

// document.addEventListener("DOMContentLoaded", function () {
//     const aboutContainer = document.querySelector(".section__nav_about-container");
//     const aboutBlock = document.querySelector(".section__nav_about");
//     const plusButton = document.getElementById("expandBtn");
//     const closeButton = document.querySelector(".section__nav_about-btn-plus");

//     // Обработчик нажатия на кнопку плюса
//     plusButton.addEventListener("click", function (event) {
//         event.preventDefault();
//         aboutBlock.classList.toggle("expanded");
//         document.body.classList.toggle("overlay");
//         closeButton.classList.toggle("close"); // Добавляем класс для стилизации креста
//     });

//     // Обработчик нажатия на крест для закрытия
//     closeButton.addEventListener("click", function (event) {
//         event.preventDefault();
//         aboutBlock.classList.remove("expanded");
//         document.body.classList.remove("overlay");
//         closeButton.classList.remove("close"); // Удаляем класс для стилизации креста
//     });

//     // Обработчик нажатия на другие области для закрытия
//     document.addEventListener("click", function (event) {
//         if (!aboutContainer.contains(event.target) && aboutBlock.classList.contains("expanded")) {
//             aboutBlock.classList.remove("expanded");
//             document.body.classList.remove("overlay");
//             closeButton.classList.remove("close"); // Удаляем класс для стилизации креста
//         }
//     });
// });
