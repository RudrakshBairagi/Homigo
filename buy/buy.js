
const form = document.querySelector('form');
const cards = document.querySelectorAll('.property-card');


form.addEventListener('submit', function(event) {
    
    
    event.preventDefault();

   
    const locationSearch = document.querySelector('input').value.toLowerCase();
    const typeSearch = document.querySelectorAll('select')[0].value; 
    const bedSearch = document.querySelectorAll('select')[1].value; 
   

    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        console.log(card)

        
        let address = card.querySelector('.address').innerText.toLowerCase();

        let price = card.querySelector('.price').innerText.toLowerCase(); 


        let beds = parseInt(card.querySelector('.features span').innerText);


        let matchLocation = address.includes(locationSearch);


        let isRent = price.includes('month');

        let matchType = false;

    
        if (typeSearch === 'all') {
            matchType = true; 
        } else if (typeSearch === 'rent' && isRent === true) {
            matchType = true;
        } else if (typeSearch === 'buy' && isRent === false) {
            matchType = true;
        }


        
        let matchBeds = false;

        if (bedSearch === 'any') {
            matchBeds = true;
        } else if (beds >= parseInt(bedSearch)) {
            matchBeds = true;
        }


        if (matchLocation && matchType && matchBeds) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    }
});