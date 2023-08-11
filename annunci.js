// INIZIO JS PAGINA ANNUNCI

fetch('./annunci.json').then((response)=> response.json()).then( (data)=>{
    
    // WRAPPER
    let categoriesWrapper = document.querySelector('#categoriesWrapper');
    
    let cardWrapper = document.querySelector('#cardWrapper')
    
    
    function setCategories() {
        
        let categories = data.map((announcement)=> announcement.category);
        
        let singleCategories = Array.from(new Set(categories));
        
        singleCategories.forEach((category)=>{
            
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
            <input class="form-check-input" type="radio" name="category" id="${category}">
            <label class="form-check-label" for="${category}">${category}</label>
            `;
            
            categoriesWrapper.appendChild(div);
            
        })

        
        
    }
    
    setCategories();
    
    
    function showCards(array){

        array.sort((a,b)=> b.price - a.price);

        cardWrapper.innerHTML = '';
        
        array.forEach((announcement)=>{
            
            let div = document.createElement('div');
            div.classList.add('card-announcement');
            div.innerHTML = `
            <div class="card-announcement">
            <p class="h2">${announcement.name}</p>
            <p class="h3">${announcement.category}</p>
            <div class="d-flex align-items-center justify-content-center">
            <p class="h3">${announcement.price}</p>
            <i class="fa-solid fa-euro-sign"></i>
            </div>
            </div>
            `

            cardWrapper.appendChild(div);
            
        });
        
    }

    showCards(data);


    // INPUT
    let checkbox = document.querySelectorAll('.form-check-input');
    let priceInput = document.querySelector('#priceInput');
    let nameInput = document.querySelector('#nameInput');

    // PARAGRAFO PREZZO
    let priceParagraph = document.querySelector('#priceParagraph');


    function filterCategory(array) {
        
        let checked = Array.from(checkbox).find((button)=> button.checked);
        let categoria = checked.id;

        
        if(categoria != 'All'){

            let filtered = array.filter((annuncio)=> annuncio.category == categoria);
            

            return filtered;
        } else {
            return array;
        }
    }

    checkbox.forEach((button)=>{
        button.addEventListener('click',()=>{
            setOfFilter();
        });
    });


    function setPriceInput() {
        
        let maxPrice = Math.ceil(data[0].price);
        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        priceParagraph.innerHTML = maxPrice + '€';

    }

    setPriceInput();

    function filterPrice(array) {
        
        let filtered = array.filter((announcement)=> +announcement.price <= +priceInput.value);
        return filtered;

    };

    priceInput.addEventListener('input', ()=>{
        priceParagraph.innerHTML = priceInput.value;
        setOfFilter();
    });

    function filterName(array) {
        
        let filtered = array.filter((announcement)=> announcement.name.toLowerCase().includes(nameInput.value.toLowerCase()));
        return filtered;

    };

    nameInput.addEventListener('input', ()=>{
        setOfFilter();
    });



    function setOfFilter() {
        
        let filteredCategory = filterCategory(data);
        let filteredPrice = filterPrice(filteredCategory);
        let filteredName = filterName(filteredPrice);

        showCards(filteredName);

    }
    
})

// FINE JS PAGINA ANNUNCI