/* Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
:puntare_su:MILESTONE 1
Per prima cosa, creiamo il markup statico:
costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
:le_corna:MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
:gesto_ti_amo:MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
:regalo: BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
:regalo: BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato.
Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
:urlo: Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare.
Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
:lampadina:Consigli del giorno:
Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?" */



// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.

const arrayImages = ['./assets/img/01/.webp', './assets/img/02.webp', './assets/img/03.webp', './assets/img/04.webp', './assets/img/05.webp'];


const imagesElement = document.querySelector('.images');
console.log(imagesElement);

let activeImage = 0

for (let i = 0; i < arrayImages.length; i++) {
    const imgSrc = arrayImages[i];

    const imgElement = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${imgSrc}" alt="">`
    console.log(imgElement);

    imagesElement.insertAdjacentHTML("afterbegin", imgElement)
}

  // select all slides
const slideImagesElements = document.querySelectorAll('.images > img')  

  const nextEl = document.querySelector('.next')

  // listen for clicks on next button
  nextEl.addEventListener('click', function() {
    console.log('cliccato next');


    // select the current slide
    const currentSlide = slideImagesElements[activeImage]
    console.log(currentSlide);

    // remove the active class from the active image
    currentSlide.classList.remove('active')

    // incremente the value of the activeImage variable
    activeImage++ // increment the value of activeImage of 1 every time we click on the next button

    // select the next slide
    console.log(activeImage);
    const nextImage = slideImagesElements[activeImage]

    // add the active class
    console.log(nextImage);
    nextImage.classList.add('active')
  
  })