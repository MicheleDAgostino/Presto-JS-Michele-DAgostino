// NAVBAR

let navbar = document.querySelector('#navbar');

let links = document.querySelectorAll('.nav-link');

let logo = document.querySelector('#logo');

let btnCustom = document.querySelector('.btnCustom');

let icons = document.querySelectorAll('.fa-brands');

let body = document.querySelector('body');

// let cardHeader = document.querySelector('#cardHeader');



function changeNavbar(background, borderRad, logoColor,btnBorder, color,bottomBord) {
    
    navbar.style.background = background;
    navbar.style.borderRadius = borderRad;
    navbar.style.borderBottom = bottomBord;
    logo.src = `http://127.0.0.1:5500/media/${logoColor}.png`;
    btnCustom.style.color = color;
    btnCustom.style.border = btnBorder;
    icons.forEach((icon)=>{
        icon.style.color = color
    });
    links.forEach((link)=>{
        link.style.color = color
    });
    
    
    
    
}


window.addEventListener('scroll', ()=>{
    
    let scrolled = window.scrollY;
    
    if(window.innerWidth > 600){
        
        
        if(scrolled > 0){
            navbar.style.width = '80%';
            changeNavbar('var(--sky)', '10px', 'logoblue', '1.5px solid var(--blue)', 'var(--blue)','transparent' )
            
        }else{
            
            navbar.style.width = '100%';
            changeNavbar('var(--blue)', '0px', 'logowhite', '1.5px solid var(--white)', 'var(--white)', 'transparent')
            
        }
    }else{
        if(scrolled > 0){
            changeNavbar('var(--sky)', '10px', 'logoblue', '1.5px solid var(--blue)', 'var(--blue)', 'transparent' )
        }else{
            changeNavbar('var(--blue)', '0px', 'logowhite', '1.5px solid var(--white)', 'var(--white)', 'transparent')
        }
    }
    
    
});

let checkButton = true;

btnCustom.addEventListener('click', ()=>{
    changeNavbar('black', '0px', 'logowhite', '1.5px solid var(--white)', 'var(--white)', '1px solid white' );
    
    if (checkButton == true) {
        body.classList.add('darkMode');
        // cardHeader.classList.remove('card-custom');
        // cardHeader.classList.add('card-header')
        
        window.addEventListener('scroll', ()=>{
            
            let scrolled = window.scrollY;
            
            if(window.innerWidth > 600){
                
                
                if(scrolled > 0){
                    navbar.style.width = '80%';
                    changeNavbar('black', '0px', 'logowhite', '1.5px solid var(--white)', 'var(--white)', '1px solid white' );
                    
                }else{
                    
                    navbar.style.width = '100%';
                    changeNavbar('black', '0px', 'logowhite', '1.5px solid var(--white)', 'var(--white)', '1px solid white' );
                    
                }
            }else{
                if(scrolled > 0){
                    changeNavbar('black', '0px', 'logowhite', '1.5px solid var(--white)', 'var(--white)', '1px solid white' );
                }else{
                    changeNavbar('black', '0px', 'logowhite', '1.5px solid var(--white)', 'var(--white)', '1px solid white' );
                }
            }
            
            
        });
        
        checkButton = false
        
    } else{
        
        body.classList.remove('darkMode');
        // cardHeader.classList.remove('card-header');
        // cardHeader.classList.add('card-custom')
        
        changeNavbar('var(--blue)', '0px', 'logowhite', '1.5px solid var(--white)', 'var(--white)', 'transparent')
        
        window.addEventListener('scroll', ()=>{
            
            let scrolled = window.scrollY;
            
            if(window.innerWidth > 600){
                
                
                if(scrolled > 0){
                    navbar.style.width = '80%';
                    changeNavbar('var(--sky)', '10px', 'logoblue', '1.5px solid var(--blue)', 'var(--blue)', 'transparent' )
                    
                }else{
                    
                    navbar.style.width = '100%';
                    changeNavbar('var(--blue)', '0px', 'logowhite', '1.5px solid var(--white)', 'var(--white)', 'transparent')
                    
                }
            }else{
                if(scrolled > 0){
                    changeNavbar('var(--sky)', '10px', 'logoblue', '1.5px solid var(--blue)', 'var(--blue)', 'transparent' )
                }else{
                    changeNavbar('var(--blue)', '0px', 'logowhite', '1.5px solid var(--white)', 'var(--white)', 'transparent')
                }
            }
            
            
        });
        
        checkButton= true;
        
        
    }
    
})

// FINE NAVBAR E IMPLEMENTATA DARK MODE