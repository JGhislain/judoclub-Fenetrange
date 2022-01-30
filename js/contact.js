const modalDisplay = document.querySelector(".modal-contact")
const modalBoutonOpen = document.querySelector(".btn-modal")
const modalBoutonClose = document.querySelector('.modal__close')
const formData = document.querySelectorAll('.formData')
const formulaire = document.getElementById('formulaire')
const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const messageZone = document.getElementById('message')
const modalErreur = document.querySelector('#error-validation')

//--------------------------------------------------------------------------------------//
//                       Fonction d'ouverture de la fenêtre modal                       //
//--------------------------------------------------------------------------------------//

const focusableForm = 'p, button, label, input, textarea, span'
let focusables = []

openModal = function() {
    verifFormulaire()
    }

//--------------------------------------------------------------------------------------//
//                         Ecoute du formulaire (partie prénom)                         //
//--------------------------------------------------------------------------------------//
function verifFormulaire() {
    formData[0].addEventListener('input', function(e) {
        //Création d'une variable pour une regex de validation du prénom  
        let firstRegex = /^[a-zA-Z '\-éèêëçäâàù]{2,}$/;
        //Récupération de la balise span
        let firstValidate = document.getElementById('first-validation');
        //Test du champ prénom
        if (firstRegex.test(firstName.value) == false) {
            //Si le prénom ne respecte pas la regex    
            firstValidate.style.display = 'block';
            firstValidate.style.color = 'red';
            firstValidate.style.fontSize = '13px';
            firstValidate.innerHTML = "Veuillez entrer deux caractères ou plus dans le champs du prénom.";
            return false;
        }
        else {
            //Sinon la regex est valide    
            firstValidate.style.display = 'none';
            return true;
        }
    });

//--------------------------------------------------------------------------------------//
//                          Ecoute du formulaire (partie nom)                           //
//--------------------------------------------------------------------------------------//

    formData[1].addEventListener('input', function(e) {
        //Création d'une variable pour une regex de validation du nom 
        let lastRegex = /^[a-zA-Z '\-éèêëçäâàù]{2,}$/;
        //Récupération de la balise span
        let lastValidate = document.getElementById('last-validation');
        //Test du champ nom
        if (lastRegex.test(lastName.value) == false) {
            //Si le nom ne respecte pas la regex      
            lastValidate.style.display = 'block';
            lastValidate.style.color = 'red';
            lastValidate.style.fontSize = '13px';
            lastValidate.innerHTML = "Veuillez entrer deux caractères ou plus dans le champs du nom.";
            return false;
        } 
        else {
            //Sinon la regex est valide       
            lastValidate.style.display = 'none';
            return true;
        }
    });
    
//--------------------------------------------------------------------------------------//
//                         Ecoute du formulaire (partie email)                          //
//--------------------------------------------------------------------------------------//
    
    //Création d'une variable qui vérifie la bonne saisie de l'adresse mail
    var validationEmailRegex = false;
    
    formData[2].addEventListener('input', function(e) {
        //Création d'une variable pour une regex de validation de l'email
        let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //Récupération de la balise span
        let emailValidate = document.getElementById('email-validation');
        //Test du champ email
        if (emailRegex.test(email.value) == false) {
            //Si l'adresse ne respecte pas la regex
            emailValidate.style.display = 'block';
            emailValidate.style.color = 'red';
            emailValidate.style.fontSize = '13px';
            emailValidate.innerHTML = "L'adresse éléctronique n'est pas valide";
            validationEmailRegex = false;
            return false;
        } 
        else {
            //Sinon la regex est valide       
            emailValidate.style.display = 'none';
            validationEmailRegex = true;
            return true;  
        }
    });

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                   TRAITEMENT DES CHAMPS DE SAISIES AU CAS PAR CAS                    //
//                                                                                      //
//--------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------//
//             Ecoute du formulaire dans son ensemble pour valider l'envoi              //
//--------------------------------------------------------------------------------------//

    //Création d'une variable qui définira si les différentes conditions d'envoie au cas par cas sont remplis
    var validationChampsIndividuel = false;
    formulaire.addEventListener('submit', function(e) {
        if (firstName.value.trim().length < 2) {
            // si moins de 2 caractères saisie dans le champ prénom alors le champ n est pas valide et l envoi est refusé
            let firstValidate = document.getElementById('first-validation');
            firstValidate.style.display = 'block';
            firstValidate.style.color = 'red';
            firstValidate.style.fontSize = '13px';
            firstValidate.innerHTML = "Veuillez renseigner votre prénom";
            e.preventDefault();
            return validationChampsIndividuel = false;
        }
        else if (lastName.value.trim().length < 2) {
            // si moins de 2 caractères saisie dans le champ nom alors le champ n est pas valide et l envoi est refusé
            let lastValidate = document.getElementById('last-validation');
            lastValidate.style.display = 'block';
            lastValidate.style.color = 'red';
            lastValidate.style.fontSize = '13px';
            lastValidate.innerHTML = "Veuillez renseigner votre nom";
            e.preventDefault();
            return validationChampsIndividuel = false;
        }
        else if (!email.value || validationEmailRegex === false) {
            // si champ email vide ou si la variable validationEmailRegex = false alors le champ n est pas valide et l envoi est refusé
            let emailValidate = document.getElementById('email-validation');
            emailValidate.style.display = 'block';
            emailValidate.style.color = 'red';
            emailValidate.style.fontSize = '13px';
            emailValidate.innerHTML = "Veuillez renseigner votre adresse mail";
            e.preventDefault();
            return validationChampsIndividuel = false;  
        }
        else if (messageZone.value.trim().length < 2) {
            // si moins de 2 caractères saisie dans le champ nom alors le champ n est pas valide et l envoi est refusé
            let messageValidate = document.getElementById('message-validation');
            messageValidate.style.display = 'block';
            messageValidate.style.color = 'red';
            messageValidate.style.fontSize = '13px';
            messageValidate.innerHTML = "Veuillez écrire un message";
            e.preventDefault();
            return validationChampsIndividuel = false;
        }
        else {
            //sinon les champs sont valides et return true sur la variable validationChampsIndividuel
            console.log(firstName.value);
            console.log(lastName.value);
            console.log(email.value);
            console.log(messageZone.value);
            return validationChampsIndividuel = true;
        }
    });

//--------------------------------------------------------------------------------------//
//                                                                                      //
//                     TRAITEMENT DES CHAMPS DE VALIDATION GLOBAUX                      //
//                                                                                      //
//--------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------//
//       Ecoute du formulaire dans sa globalité via l'attribut "name" avant envoi       //
//--------------------------------------------------------------------------------------//

    //Variable qui défini si les conditions globaux ssont respectés
    let validationConditions = false;
    
    document.forms["contact"].addEventListener('submit', function(e) {
        //Variable de message d'erreur
        let erreurPost;
        let inputs = this;
        //Création d'une boucle qui parcours le formulaire
        for (let i = 0; i < inputs.length; i++) {
            const input = inputs[i];
            //Si un champ n'a pas de valeur
            if (!input.value) {
                erreurPost = "Veuillez renseigner tout les champs"
                break;
            }
        }
        if (erreurPost) {
            modalErreur.innerHTML = erreurPost
            modalErreur.style.transition = '0.3s'
            modalErreur.style.color = "#e54858"
            modalErreur.style.fontSize = '16px'
            return validationConditions = false
        }
        //Sinon return validationConditions = true
        else {
            modalErreur.style.display = 'none'
            return validationConditions = true
        }
    });

//--------------------------------------------------------------------------------------//
//                  Fonction d'envoi du formulaire aprés vérification                   //
//--------------------------------------------------------------------------------------//

    formulaire.addEventListener('submit', function(e) {
        //Si les variables de validations sont true alors le message est envoyé avec message de confirmation
        if ((validationChampsIndividuel === true) && (validationConditions === true)) {
            e.preventDefault()
            console.log("Votre message à été envoyé")
            modalDisplay.classList.remove('show')
            return true
        }
        else {
            e.preventDefault()
            return false
        }
    })
};

//--------------------------------------------------------------------------------------//
//                      Fonction de fermeture de la fenêtre modal                       //
//--------------------------------------------------------------------------------------//


function focusForm(e) {
    e.preventDefault()
    let indexForm = focusables.findIndex(getFocus => getFocus === modalDisplay.querySelector(':focus'))
    console.log(modalDisplay.querySelector(':focus'))
    if (indexForm < 1) {
        indexForm = 15
    }
    console.log(focusables.length)
    focusables[indexForm].focus()
    if (e.shiftKey == 'Tab') {
        indexForm --
    }
    else {
        indexForm ++
    }
    console.log(indexForm)
    document.querySelector('.submit').addEventListener('keydown', e => {
        e.preventDefault()
        console.log(e.defaultPrevented)
        if (e.shiftKey === true) {
            console.log('bordel')
            indexForm = 13
            focusables[indexForm].focus()
        }
        if (e.shiftKey == false) {
            indexForm = 1
            focusables[indexForm].focus()
        }
    })
}

//--------------------------------------------------------------------------------------//
//            Appel des fonctions qui ouvre la lightbox et la fenêtre modal             //
//--------------------------------------------------------------------------------------//

openModal()
window.addEventListener('keydown', (e) => {
    if (e.keyCode === 70) {
        openModal(e)
    }
})

window.addEventListener('keyup', (e) => {
    if (e.keyCode === 27) {
        closeModal()
    }
    if (e.key === 'Tab' && modalDisplay.classList.contains('show')) {
        focusForm(e)
    }
})

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