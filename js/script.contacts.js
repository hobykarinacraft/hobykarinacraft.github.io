//  html форма реєстрації 
//  виконання перевірки введення інформації у всі поля


const mainForm = document.forms.main;

const mainFormInput = mainForm.nameInput;

const inputEmail = mainForm.nameEmail;


const mainformInputPlaceholder = mainFormInput.placeholder;


mainForm.addEventListener("submit", function (event) {
   console.log('відправляється');
   if (mainFormInput.value.length < 3) {
      mainFormInput.parentElement.insertAdjacentHTML(
         "beforeend",
         `<div class="main-form__error">
            Введіть ім'я, що більше 3 символів
         </div>`
      );
      console.log('поле не заповнене')
      event.preventDefault();
   }
   if (inputLogin.value.length < 6) {
      inputLogin.parentElement.insertAdjacentHTML(
         "beforeend",
         `<div class="main-form__error">
         Введіть логін, що більше 6 символів
      </div>`
      );
      event.preventDefault();
   }
});

inputEmail.addEventListener("focus", function (event) {
   if (inputEmail.nextElementSibling) {
      inputEmail.nextElementSibling.remove();
   }
});


function emailTest(input) {
   return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}



//8 На сторінці розмістити текстове поле input.
//  При натисненні клавіші Enter введений текст записується
// нижче у вигляді абзацу під input, а вміст поля input очищається.


//Відправка коментарів на сайт
let input = document.querySelector('.input');
function writeComment(event) {

   if (event.code == 'Enter' && (event.ctrlKey || event.metaKey)) {
      let comment = document.createElement('p');
      comment.innerHTML = input.value;
      input.after(comment);
      input.value = " ";

   }
}
input.addEventListener('keydown', writeComment);

let textarea = document.querySelector('.textarea_item');
function writeCommentArea(event) {
   let comment1 = document.createElement('p');
   comment1.innerHTML = textarea.value;
   textarea.after(comment1);
   textarea.value = textarea.value + '\n' + textarea.value;
};
textarea.addEventListener('keydown', writeCommentArea);


// рахує кількість написаних символів 
const txtItem = document.querySelector('.textarea__item');
const txtItemLimit = txtItem.getAttribute('maxlength');
const txtCounter = document.querySelector('.textarea__counter span');
txtCounter.innerHTML = txtItemLimit;

txtItem.addEventListener("keyup", txtSetCounter);
txtItem.addEventListener("keydown", function (event) {
   if (event.repeat) txtSetCounter();
});

//або так
txtItem.addEventListener("input", txtSetCounter);


function txtSetCounter() {
   const txtCounterResult = txtItemLimit - txtItem.value.length;
   txtCounter.innerHTML = txtCounterResult;
}