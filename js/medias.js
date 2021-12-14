const lightbox = document.querySelector("#lightbox")
const close = document.querySelector(".lightbox__close")
const preview = document.querySelector(".lightbox__preview")
const next = document.querySelector(".lightbox__next")
const imgListe = document.getElementById('liste')
const links = document.querySelectorAll(".liste a")
const image = lightbox.querySelector(".lightbox__container img")

//--------------------------------------------------------------------------------------//
//                       On ajoute l'écouteur clic sur les liens                        //
//--------------------------------------------------------------------------------------//
let index;

let openLightbox = function() {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener("click", function(e) {
            e.preventDefault()
            // ---- On ajoute l'image du lien cliqué dans la lightbox --------------------------------
            image.src = this.href
            //definir index 
            let img = this.querySelector('img');
            index = img.dataset.index
            console.log(this.querySelector('img'));
            console.log(img);
            console.log(index);

            // ---- on affiche la lightbox -----------------------------------------------------------
            lightbox.classList.add("show")
        });
    }
    // ---- On active le bouton close --------------------------------------------------------
    closeLightbox()
    // ---- On active le bouton preview ------------------------------------------------------
    previewLightbox()
    // ---- On active le bouton next ------------------------------------------------------
    nextLightbox()
};


// ---- On ferme la lightbox lorsque qu'on click sur le bouton close ---------------------
let closeLightbox = function() {
    close.addEventListener("click", function(){
        // ---- On retire la fenêtre lightbox ----------------------------------------------------
        lightbox.classList.remove("show")
    })
};

//--------------------------------------------------------------------------------------//
//                       Fonction de recherche des sources médias                       //
//--------------------------------------------------------------------------------------//


let getImageUrl = function(index) {
    allMedia = document.querySelectorAll(".media")
    let media = allMedia[index];
    console.log(index)
    return media.querySelector("img").src;
}

// ---- On va à la photo précédente lorsqu'on click sur le bouton preview ----------------
let previewLightbox = function() {
    preview.addEventListener("click", function(){
        // ---- On affiche l'image précédente ----------------------------------------------------
        index -= 1
        imgTotal = document.querySelectorAll('.liste img')
        // si index < 0 
        if (index < 0) {
            // index = nombre image total
            index = imgTotal.length - 1
        }
        //Afficher l image précédente dans la lightbox
            //Cibler l'img du lightbox container
        let imgUrl = getImageUrl(index)
            //Changer la source de mon image par la source de mon image précédente
        image.src = imgUrl
    })
};


// ---- On va à la photo suivante lorsqu'on click sur le bouton next ---------------------
let nextLightbox = function() {
    next.addEventListener("click", function(){
        // ---- On affiche l'image suivante ----------------------------------------------------
        index ++
        imgTotal = document.querySelectorAll('.liste img')
        console.log(index)
        console.log(imgTotal)
        // si index > nombreTotal d'image
        if (index == imgTotal.length) {
            // index = 0
            index = 0
        }
        let imgSrc = getImageUrl(index)
        image.src = imgSrc
    })
};

// ---- On active la fonction d'écoute du click sur les photos ---------------------------
openLightbox();

//--------------------------------------------------------------------------------------//
//                    Ajout du nombre de like si click sur un coeur                     //
//--------------------------------------------------------------------------------------//

let nombreLikes = function() {
    let iconesCoeur = document.querySelectorAll('.coeur')
    for (let i = 0; i < iconesCoeur.length; i++) {
        const icone = iconesCoeur[i];
        //On écoute le click des icones de coeurs
        icone.addEventListener('click', function(e) {
            e.preventDefault()
            //Si on click sur un coeur on ajoute la class 'bold'
            //et on incrémente +1 au compteur de likes
            if (!icone.classList.contains('bold')) {
                icone.classList.add('bold')
                console.log((icone.nextSibling.data))
                let nbLikes = (icone.nextSibling.data).match(/\d/g).join('')
                console.log(parseFloat(nbLikes))
                let likes = parseFloat(nbLikes)
                icone.nextSibling.data = likes+1  + " kiffs"
            }
            //Sinon on retire la classe 'bold'
            else {
                icone.classList.remove('bold')
                console.log((icone.nextSibling.data))
                let nbLikes = (icone.nextSibling.data).match(/\d/g).join('')
                console.log(parseFloat(nbLikes))
                let likes = parseFloat(nbLikes)
                icone.nextSibling.data = likes-1 + " kiffs"
            }
        })
    }
}

nombreLikes();