// import {scrollSmoothlyToPosition} from './scrollSmoothlyToPosition.js';

// 1. Дожидаемся построения html структуры
document.addEventListener("DOMContentLoaded", function () {
  // 2. Применяем конструкцию try..catch чтобы перехватывать ошибки, чтобы остальной js код не ломался при ошибке
  try {


    
    // // 3. Тут будем использовать скрипт плавной прокрутки
    // scrollSmoothlyToPosition({
    //   // selector: "#block3" означает что скролл произойдёт к элементу с id="block3"
    //   selector: "#block3",
    // });



    // // 1. Допустим у нас уже есть найденный элемент в коде
    // let element = document.querySelector("#block3");

    // scrollSmoothlyToPosition({
    //   // 2. Тогда элемента в скрипте будет через свойство el
    //   el: element,
    // });



    // scrollSmoothlyToPosition({
    //   selector: "#block3",
    //   // Число 50 означает что при скролле добавится отступ в 50px от верха страницы
    //   offsetTop: 100, 
    // });



    // scrollSmoothlyToPosition({
    //   selector: "#block3",
    //       // Строка "5rem" означает что при скролле добавится отступ в 5rem от верха страницы
    //   offsetTop: "5rem",
    // });



    // scrollSmoothlyToPosition({
    //   selector: "#block3",
    //   // mode: "bottom" - означает что скролл будет нижней части блока к нижней части браузера
    //   mode: "bottom",
    // });



    // scrollSmoothlyToPosition({
    //   // y: 500 - означает что страница будет просроллена на 500px вниз от верха страницы
    //   y: 750,
    // });



    // let buttonUp = document.querySelector('#button-up');

    // buttonUp.addEventListener("click",function(e) {
    //   scrollSmoothlyToPosition({
    //     y: 0,
    //   });
    // });



    // 1. Соберём все ссылки на странице
    let links = document.querySelectorAll("a");

    // 2. Обойдём каждую
    links.forEach(function (link) {

        // 3. Если в ссылке есть хэш (обозначение id на странице - **#block3**)
      if (link.hash !== "") {
      
        // 4. То добавляем к этой ссылке плавный скролл
        link.addEventListener("click", function (e) {
        
          // 5. Предотвращаем поведение по умолчанию (без скролла)
          e.preventDefault();

                // 6. Скроллим к элементу по селектору в который кладём хэш ссылки который соответствует селектору блока по id
          scrollSmoothlyToPosition({
            selector: link.hash, 
          });
        });
      }
    });



  } catch (err) {
    console.error(err);
  }
});
