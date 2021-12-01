const $email = document.getElementById('email');
const $form = document.getElementById('form');
const $bottomForm = document.querySelector('.access__form');
const $bottomEmail = document.querySelector('.access__form input');
const $preloader = document.querySelector('.preloader');


function validateEmail(email) {
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}

$form.addEventListener('submit', (e) => {
   let emailValue = $email.value;
   if (validateEmail(emailValue)) {
      $form.classList.remove('error');
  } else {
      $form.classList.add('error');
      $email.style.borderColor = 'red';
      e.preventDefault();
  }
}) 

$bottomForm.addEventListener('submit', (e) => {
   let emailValue = $bottomEmail.value;
   if (validateEmail(emailValue)) {
      $bottomForm.classList.remove('error');
  } else {
      $bottomForm.classList.add('error');
      e.preventDefault();
  }
}) 

window.addEventListener('load', () => {
   document.querySelector('body').style.overflow = 'initial'
   $preloader.style.opacity = '0';
   $preloader.style.pointerEvents = 'none';
   document.querySelector('h1').classList.add('pop')
   document.querySelector('.hero__offer p').classList.add('pop')
   document.querySelector('.hero__offer-form').classList.add('pop')
   document.querySelector('.hero__img').classList.add('pop')
})

function scrollProductivePop() {
   var productiveTitle = document.querySelector('.productive__offer h2');
   var productiveLink = document.querySelector('.productive__offer a');
   var productiveImg = document.querySelector('.productive__img');
   var productiveText = document.querySelectorAll('.offer__p');
   var position = productiveTitle.getBoundingClientRect().top;
   var screenPosition = window.innerHeight / 1.4;
   if (position < screenPosition) {
      productiveTitle.classList.add('pop');
      for (let x of productiveText) {
         x.classList.add('pop');
      }
      productiveLink.classList.add('pop');
      productiveImg.classList.add('pop');
   }
}

window.addEventListener('scroll', scrollProductivePop);