const lightbox = document.querySelector("#lightbox")
const close = document.querySelector(".lightbox__close")
const preview = document.querySelector(".lightbox__preview")
const next = document.querySelector(".lightbox__next")
const imgListe = document.getElementById('liste')
const links = document.querySelectorAll(".liste a")
const imageContainer = lightbox.querySelector(".lightbox__container img")
const videoContainer = lightbox.querySelector(".lightbox__container video")
const aLinkContainer = lightbox.querySelector(".lightbox-link")

//--------------------------------------------------------------------------------------//
//                       On ajoute l'écouteur clic sur les liens                        //
//--------------------------------------------------------------------------------------//
let index;

let openLightbox = function() {
    for (let i = 0; i < links.length; i++) {
        const link = links[i];
        link.addEventListener("click", function(e) {
            e.preventDefault()
            //Si on clic sur une photo on ajoute l'image 
            //du lien de la photo et on l'insère dans la balise image
            if (link.classList.contains('photo') == true) {
                imageContainer.src = this.href
                let img = this.querySelector('img')
                mediaIndex = img.dataset.index
                lightbox.classList.add('show')
                imageContainer.style.display = "initial"
            }
            else {
                videoContainer.src = this.href
                let vid = this.querySelector('video')
                mediaIndex = vid.dataset.index
                lightbox.classList.add('show')
                videoContainer.classList.add('show')
            }
        });
    }
}

//--------------------------------------------------------------------------------------//
//                         Fonction de fermeture de la lightbox                         //
//--------------------------------------------------------------------------------------//

function closeLightbox() {
    //On retire la classe show de la lightbox
    imageContainer.style.display = "none"
    videoContainer.classList.remove('show')
    lightbox.classList.remove("show")
    if (document.querySelector('.player-youtube').childElementCount === 0) {
        document.querySelector('.player-youtube').appendChild(iframeMedia[0])
        aLinkContainer.classList.remove('yt-show')
        document.querySelector('.player-youtube').classList.add('yt-classic')
        document.querySelector('.player-youtube iframe').height = 350
        document.querySelector('.player-youtube iframe').width = 350
    }
}

close.addEventListener("click", closeLightbox)
window.addEventListener('keyup', (e) => {
    if (e.keyCode === 27) {
        closeLightbox()
    }
})

//--------------------------------------------------------------------------------------//
//                       Fonction de recherche des sources médias                       //
//--------------------------------------------------------------------------------------//

let getMediaUrl = function(mediaIndex) {
    mediaCible = links[mediaIndex];
    if (mediaCible.classList.contains("photo")) {
        return mediaCible.querySelector('img').src
    }
    if (mediaCible.classList.contains("video")) {
        return mediaCible.querySelector('video').src
    }
    else {
        return mediaCible.querySelector('iframe')
    }
};

//--------------------------------------------------------------------------------------//
//                      Fonction de media précédent de la lightbox                      //
//--------------------------------------------------------------------------------------//

function previewLightbox() {
    //On initialise mediaIndex
    mediaIndex -= 1
    mediaTotal = document.querySelectorAll('.media')
    //Si mediaIndex est inférieur à 0 alors revenir à la dernière photo
    if (mediaIndex < 0) {
        mediaIndex = mediaTotal.length - 1
    }
    //Appel de la fonction de récupération de l'Url du média à venir
    let mediaUrl = getMediaUrl(mediaIndex)
    //Si le media est une photo on affiche la photo
    if (mediaCible.classList.contains("photo")) {
        imageContainer.src = mediaUrl
        //Si le media précédent était une vidéo on remplace l affichage des balises
        if (imageContainer.style.display = "none") {
            aLinkContainer.style.display = 'none'
            videoContainer.classList.remove('show')
            imageContainer.style.display = 'initial'
            if (document.querySelector('.player-youtube').childElementCount === 0) {
                document.querySelector('.player-youtube').appendChild(iframeMedia[0])
                aLinkContainer.classList.remove('yt-show')
                document.querySelector('.player-youtube').classList.add('yt-classic')
                document.querySelector('.player-youtube iframe').height = 350
                document.querySelector('.player-youtube iframe').width = 350
            }
        }
    }
    //Si le media est une vidéo on affiche la vidéo
    else if (mediaCible.classList.contains('video')) {
        aLinkContainer.style.display = 'none'
        imageContainer.style.display = "none"
        videoContainer.classList.add('show')
        videoContainer.src = mediaUrl
        if (document.querySelector('.player-youtube').childElementCount === 0) {
            document.querySelector('.player-youtube').appendChild(iframeMedia[0])
            aLinkContainer.classList.remove('yt-show')
            document.querySelector('.player-youtube').classList.add('yt-classic')
            document.querySelector('.player-youtube iframe').height = 350
            document.querySelector('.player-youtube iframe').width = 350
        }
    }
    else if (mediaCible.classList.contains('player-youtube')) {
        imageContainer.style.display = 'none'
        videoContainer.classList.remove('show')
        aLinkContainer.innerHTML = ""
        aLinkContainer.appendChild(mediaUrl);
        aLinkContainer.style.display = 'initial'
        iframeMedia = Array.from(document.querySelectorAll('iframe'))
        aLinkContainer.classList.add('yt-show')
        document.querySelector('iframe').classList.remove('yt-classic')
        document.querySelector('iframe').height = 720
        document.querySelector('iframe').width = 1300
    }
}

preview.addEventListener('click', previewLightbox)
window.addEventListener('keyup', (e) => {
    if (e.keyCode === 37) {
        previewLightbox()
    }
})

//--------------------------------------------------------------------------------------//
//                       Fonction de média suivant de la lightbox                       //
//--------------------------------------------------------------------------------------//

    let iframeMedia;

    function nextLightbox() {
        //On initialise mediaIndex
        mediaIndex ++
        mediaTotal = document.querySelectorAll('.media')
        console.log(document.querySelector('.player-youtube').childElementCount)
        //Si mediaIndex est supérieur à mediaTotal.length alors revenir à la premiere photo
        if (mediaIndex === mediaTotal.length) {
            mediaIndex = 0
        }
        //Appel de la fonction de récupération de l'Url du média à venir
        let mediaUrl = getMediaUrl(mediaIndex)
        //Si le media est une photo on affiche la photo
        if (mediaCible.classList.contains("photo")) {
            imageContainer.src = mediaUrl
            //Si le media précédent était une vidéo on remplace l affichage des balises
            if (imageContainer.style.display = "none") {
                aLinkContainer.style.display = 'none'
                videoContainer.classList.remove('show')
                imageContainer.style.display = 'initial'
                if (document.querySelector('.player-youtube').childElementCount === 0) {
                    document.querySelector('.player-youtube').appendChild(iframeMedia[0])
                    aLinkContainer.classList.remove('yt-show')
                    document.querySelector('.player-youtube').classList.add('yt-classic')
                    document.querySelector('.player-youtube iframe').height = 350
                    document.querySelector('.player-youtube iframe').width = 350
                }
            }
        }
        //Si le media est une vidéo on affiche la vidéo
        else if (mediaCible.classList.contains('video')) {
            aLinkContainer.style.display = 'none'
            imageContainer.style.display = "none"
            videoContainer.classList.add('show')
            videoContainer.src = mediaUrl
            if (document.querySelector('.player-youtube').childElementCount === 0) {
                document.querySelector('.player-youtube').appendChild(iframeMedia[0])
                aLinkContainer.classList.remove('yt-show')
                document.querySelector('.player-youtube').classList.add('yt-classic')
                document.querySelector('.player-youtube iframe').height = 350
                document.querySelector('.player-youtube iframe').width = 350
            }
        }
        else if (mediaCible.classList.contains('player-youtube')) {
            imageContainer.style.display = 'none'
            videoContainer.classList.remove('show')
            aLinkContainer.innerHTML = ""
            aLinkContainer.appendChild(mediaUrl);
            aLinkContainer.style.display = 'initial'
            iframeMedia = Array.from(document.querySelectorAll('iframe'))
            aLinkContainer.classList.add('yt-show')
            document.querySelector('iframe').classList.remove('yt-classic')
            document.querySelector('iframe').height = 720
            document.querySelector('iframe').width = 1300
        }
    }

    next.addEventListener('click', nextLightbox)
    window.addEventListener('keyup', (e) => {
        if (e.keyCode === 39) {
            nextLightbox()
        }
    })

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
                icone.nextSibling.data = likes+1  + " j'aime"
            }
            //Sinon on retire la classe 'bold'
            else {
                icone.classList.remove('bold')
                console.log((icone.nextSibling.data))
                let nbLikes = (icone.nextSibling.data).match(/\d/g).join('')
                console.log(parseFloat(nbLikes))
                let likes = parseFloat(nbLikes)
                icone.nextSibling.data = likes-1 + " j'aime"
            }
        })
    }
}

nombreLikes();

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