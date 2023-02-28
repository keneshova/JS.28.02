//найти элемент используя css селектор
let sayHelloBtn = document.querySelector("say-hello");

//изменить свойства элемента (сод-е, класс, итд)
sayHelloBtn.textContent = "SAY HELLO";
sayHelloBtn.className = "btn btn-red";//соз класс к кнопке 
sayHelloBtn.classList.add("btn", "btn-red")//соз класс

//изменить стили элемента
sayHelloBtn.style.color = "tomato";
sayHelloBtn.style. fontSize = "20px";