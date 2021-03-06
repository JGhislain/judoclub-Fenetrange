//--------------------------------------------------------------------------------------//
//                                                                                      //
//                              Appel des éléments du DOM                               //
//                                                                                      //
//--------------------------------------------------------------------------------------//
const tagNav = document.querySelectorAll('.nav-tableau')
const tableaux = document.querySelectorAll('.tableau')

//--------------------------------------------------------------------------------------//
//      Fonction d'affichage du tableau de classement en fonction de la catégorie       //
//                                    séléctionnées                                     //
//--------------------------------------------------------------------------------------//


let afficheTableau = function() {
    for (let i = 0; i < tagNav.length; i++) {
        const tag = tagNav[i];
// ---- Ecoute du clic des tags ----------------------------------------------------------
        tag.addEventListener('click', (e) => {
// ---- Boucle des tags pour vérifier l'états de la classe -------------------------------
            tagNav.forEach(nav => {
                if (nav.classList.contains('nav-actif')) {
                    nav.classList.remove('nav-actif')
                }
            })
            tag.classList.add('nav-actif')
// ---- Boucle des tableaux pour vérifier lequel afficher selon le data-name -------------
            tableaux.forEach(tableau => {
                if (tag.dataset.name == tableau.dataset.name) {
                    tableau.classList.remove('table-hidden')
                    tableau.classList.add('anim-in')
                }
                else {
                    tableau.classList.remove('anim-in')
                    tableau.classList.add('table-hidden')
                }
            });
        })
    }
}

afficheTableau()

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