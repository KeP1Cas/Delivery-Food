const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

//#1

const buttonAuth = document.querySelector('.button-auth'),
      modalAuth = document.querySelector('.modal-auth'),
      closeAuth = document.querySelector('.close-auth'),
      logInForm = document.querySelector('#logInForm'),
      loginInput = document.querySelector('#login'),
      userName = document.querySelector('.user-name'),
      buttonOut = document.querySelector('.button-out'),
      cardsRestaurants = document.querySelector('.cards-restauransts'),
      containerPromo = document.querySelector('.container-promo'),
      restaurants = document.querySelector('.restaurants'),
      menu = document.querySelector('.menu');

let login = localStorage.getItem('DanyHackman');

function toogleModalAuth() {
  modalAuth.classList.toggle('is-open');
}

function autorized() {

  function logOut(){
    login = null;
    localStorage.removeItem('DanyHackman');
    buttonAuth.style.display ='';
    userName.style.display = '';
    buttonOut.style.display = '';
    buttonOut.removeEventListener('click', logOut);
    checkAuth();
  }

  console.log('Авторизован');

  userName.textContent = login;

  buttonAuth.style.display ='none';
  userName.style.display = 'inline';
  buttonOut.style.display = 'block';

  buttonOut.addEventListener('click', logOut)
}

function notAutorized(){
  console.log('Не авторизован');
  
  function logIn(event){
    event.preventDefault();
    login = loginInput.value;

    localStorage.setItem('DanyHackman', login);

    toogleModalAuth();
    buttonAuth.removeEventListener('click', toogleModalAuth);
    closeAuth.removeEventListener('click', toogleModalAuth);
    logInForm.removeEventListener('submit', logIn);
    logInForm.reset();
    checkAuth();
  }

  buttonAuth.addEventListener('click', toogleModalAuth);
  closeAuth.addEventListener('click', toogleModalAuth);
  logInForm.addEventListener('submit', logIn);
}

function checkAuth(){
  if (login){
    autorized();
  } else {
    notAutorized();
  }
}

checkAuth();

// // #2

// function createCardsRestauransts(){

//   const card = `
//         <a class="card card-restaurant">
//           <img src="img/tanuki/preview.jpg" alt="image" class="card-image"/>
//             <div class="card-text">
//               <div class="card-heading">
//                 <h3 class="card-title">Тануки</h3>
//                 <span class="card-tag tag">60 мин</span>
//               </div>
//               <div class="card-info">
//                 <div class="rating">
//                   4.5
//                 </div>
//                 <div class="price">От 1 200 ₽</div>
//                 <div class="category">Суши, роллы</div>
//               </div>
//             </div>
//         </a>            
//   `;

//   cardsRestaurants.insertAdjacentHTML('beforeEnd', card);
// }

// createCardsRestauransts();
// createCardsRestauransts();
// createCardsRestauransts();

// function openGoods(event){
//   const target = event.target;

//   const restaurant = target.closest('.card-restaurant');
  
//   if (restaurant){
//     containerPromo.classList.add('hide');
//     restaurants.classList.add('hide');
//     menu.classList.remove('hide');
//   }
// }

// cardsRestaurants.addEventListener('click', openGoods);