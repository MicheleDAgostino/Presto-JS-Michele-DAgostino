// INIZIO JS PERSONALE


// PRIMA SECTION CON SWIPER E CONTATORI

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');


function createInterval(number, element, timing) {
    let counter = 0;

    let interval = setInterval(()=>{

        if(counter < number){
            counter++;
            element.innerHTML = counter;
        }else{
            clearInterval(interval);
        }

    },timing);

};

let confirm = false;

let observer = new IntersectionObserver( (entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting && confirm == false){
            createInterval(1426, firstNumber, 1);
            createInterval(852, secondNumber, 1);
            createInterval(164, thirdNumber, 10);
            confirm = true;
            setTimeout(()=>{
                confirm = false;
            },10000);
        }

    });

});

observer.observe(firstNumber);




let wrapper = document.querySelector('#wrapper');

let reviews = [
    {nome: 'Michele', description: 'Assistenza top, spedizioni velocissime. Ma solo il sito web si merita 5 stelle', rank: 5},
    {nome: 'Angela', description: 'Il miglior sito di annunci mai visto', rank: 5},
    {nome: 'Gianluigi', description: 'Ho fatto molti acquisti su questo sito, lo consiglio a tutti!', rank: 4},
    {nome: 'Laura', description: 'In tutta la mia esperienza solo un articolo difettoso ma subito sostituito, assistenza delle migliori', rank: 4},
    {nome: 'User924', description: 'Comprerei tutto da qua solo per la bellezza del sito!', rank: 5},
];

reviews.forEach((review)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
    <i class="fa-regular fa-face-smile-beam fa-2x py-3"></i>
    <p class="display-5">${review.nome}</p>
    <p class="lead px-4">"${review.description}"</p>
    <div class="star"></div>
    `

    wrapper.appendChild(div)
})

let star = document.querySelectorAll('.star');

star.forEach((div,index)=>{

    for(let i = 1; i <= reviews[index].rank; i++){
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-star','star-custom');
        div.appendChild(icon);
    }

    if(reviews[index].rank < 5){

        let difference = 5 - reviews[index].rank;

        for(let i = 1; i <= difference; i++){
            let icon = document.createElement('i');
            icon.classList.add('fa-regular', 'fa-star');
            div.appendChild(icon)
        }
    }
})


let swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
});

// FINE PRIMA SECTION





