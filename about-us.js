// INIZIO JS PAGINA ABOUT US

let circle = document.querySelector('.circle');

let arrow = document.querySelector('.arrow');

let memberCard = document.querySelector('.member-card')

let check = false;

let members = [
    {name: 'Michele', description: 'Studente di Aulab e il suo linguaggio preferito è JAVASCRIPT', url: './media/image1.jpg'},
    {name: 'Michele', description: 'Studente di Aulab e il suo linguaggio preferito è JAVASCRIPT', url: './media/image1.jpg'},
    {name: 'Michele', description: 'Studente di Aulab e il suo linguaggio preferito è JAVASCRIPT', url: './media/image1.jpg'},
    {name: 'Michele', description: 'Studente di Aulab e il suo linguaggio preferito è JAVASCRIPT', url: './media/image1.jpg'},
    {name: 'Michele', description: 'Studente di Aulab e il suo linguaggio preferito è JAVASCRIPT', url: './media/image1.jpg'},
];

members.forEach((member)=>{
    let div = document.createElement('div');
    div.classList.add('moved');
    div.style.backgroundImage = `url(${member.url})`;
    circle.appendChild(div);
});

let moved = document.querySelectorAll('.moved');

arrow.addEventListener('click', ()=>{
    
    if(check == false){
        arrow.style.transform = 'rotate(180deg)';
        moved.forEach((el,i)=>{
            let translate = 120 * (i+1);
            el.style.transform = `translateY(${translate}px)`;
            el.style.opacity = '1';
            
            el.addEventListener('click', ()=>{
                memberCard.innerHTML = `
                <i class="fa-solid fa-user-tie fa-4x"></i>
                <p class="h3">${members[i].name}</p>
                <p class="lead">${members[i].description}</p>
                `
                memberCard.classList.remove('d-none');
            });

            
        });
        
        check = true;
        
    } else{
        arrow.style.transform = 'rotate(0deg)';
        
        moved.forEach((el)=>{
            el.style.transform = `translateY(0px)`;
            el.style.opacity = '0'
        });
        check = false;
        memberCard.classList.add('d-none');
    };
    
});

// FINE JS PAGINA ABOUT US



