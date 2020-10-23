//Сздаем переменную в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle')
// Создаем переменную в которую кладем меню
let menu = document.querySelector('.sidebar')
//Здесь мы отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event){
  //Отменяем стандартное действие ссылки
  event.preventDefault();
  //Вешаем класс меню, когда кликнули по кнопке меню
  menu.classList.toggle('visible')
})