const cards = [
    {
        id:1,
        title: "Buttermilk Pancakes",
        price: "$15.99",
        category: "Breakfast",
        img:"./images/item-1.jpeg",
        dec:"I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },

    {
        id:2,
        title: "Diner Double",
        price: "$13.99",
        category: "Launch",
        img:"./images/item-2.jpeg",
        dec:"vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"
    },

    {
        id:3,
        title: "Godzilla Milkshake",
        price: "$6.99",
        category: "Shakes",
        img:"./images/item-3.jpeg",
        dec:"ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },

    {
        id:4,
        title: "Country Delight",
        price: "$20.99",
        category: "Breakfast",
        img:"./images/item-4.jpeg",
        dec:"Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut"
    },

    {
        id:5,
        title: "Egg Attack",
        price: "$22.99",
        category: "Launch",
        img:"./images/item-5.jpeg",
        dec:"franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"
    },

    {
        id:6,
        title: "Oreo Dream",
        price: "$18.99",
        category: "Shakes",
        img:"./images/item-6.jpeg",
        dec:"Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },

    {
        id:7,
        title: "Bacon Overflow",
        price: "$8.99",
        category: "Breakfast",
        img:"./images/item-7.jpeg",
        dec:"carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"
    },

    {
        id:8,
        title: "American Classic",
        price: "$12.99",
        category: "Launch",
        img:"./images/item-8.jpeg",
        dec:"on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"
    },

    {
        id:9,
        title: "Quarantine Buddy",
        price: "$16.99",
        category: "Shakes",
        img:"./images/item-9.jpeg",
        dec:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
    {
        id:10,
        title: "Steak Dinner",
        price: "$39.99",
        category: "Dinner",
        img:"./images/item-10.jpeg",
        dec:"skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    }
]


const allCards = document.getElementById("all");
const allbuttons = document.querySelectorAll('but');

window.addEventListener("DOMContentLoaded" , function(){
    displayMenu(cards);
})

allbuttons.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const datalist = e.currentTarget.dataset.id;
        const category = cards.filter(function(){
            if(it.category === it){
                return it;
            }
        });
        if(datalist === "All"){
            displayMenu(cards)
        }else{
            displayMenu(category)
        }
    })
})


function displayMenu(it){
    let renderMenu = it.map(function(item){
        return `<div id="all" class="allcards">
        <div class="card">
            <div class="images">
                <img src="${item.img}" alt="image">
            </div>
            <div class="info">
                <div class="name">
                    <h3>${item.title}</h3>
                    <p>${item.price}</p>
                    
                </div>
                
                <div class="text">
                    <p>${item.dec}</p>
                </div>
            </div>
        </div>
        </div>`
    })
    renderMenu = renderMenu.join("");
    allCards.innerHTML = renderMenu;
}