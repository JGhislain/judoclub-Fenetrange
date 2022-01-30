//--------------------------------------------------------------------------------------//
//                   Appel du DOM pour fenetre modal mentions légales                   //
//--------------------------------------------------------------------------------------//

const modalDisplayLegal = document.querySelector(".content-modal-legal")
const modalLegalOpen = document.querySelector(".modal-legal")
const modalLegalClose = document.querySelector('.modal__close__legal')

//--------------------------------------------------------------------------------------//
//                       Fonction d'ouverture de la fenêtre modal                       //
//--------------------------------------------------------------------------------------//
modalLegalOpen.addEventListener('click', (e) => {
    e.preventDefault()
    modalDisplayLegal.classList.add('modal-show')
    closeLegal()
})

function closeLegal () {
    modalLegalClose.addEventListener('click', (e) => {
        e.preventDefault()
        modalDisplayLegal.classList.remove('modal-show')
    })
}

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                        Fonction Menu Burger Portable Display                         //
//                                                                                      //
//--------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------//
//                           Appel du DOM pour le menu Burger                           //
//--------------------------------------------------------------------------------------//

const burger = document.querySelector('.burger')
const navBurger = document.querySelector('nav')

//--------------------------------------------------------------------------------------//
//                           Fonction d'écoute du menu burger                           //
//--------------------------------------------------------------------------------------//

burger.addEventListener('click', () => {
    burger.classList.toggle('nav-actif')
    navBurger.classList.toggle('nav-burger')
})