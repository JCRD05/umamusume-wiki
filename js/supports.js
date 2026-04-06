document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

let allCards = [];
let currentCards = [];
const sortSelector = document.querySelector('.sort-dropdown')

sortSelector.addEventListener('change', () => {
    const criteria = sortSelector.value;

    let sortedCards = [...currentCards];
    if(criteria == 'Sort By: Default') {
        loadCards(currentCards);
        return;
    }
    else if(criteria == 'Sort By: Rarity') {
        const rarities = { 'SSR': 1, 'SR': 2, 'R': 3};
        sortedCards.sort((a, b) => rarities[a.rarity] - rarities[b.rarity]);
    }
    else if (criteria == 'Sort By: Tier') {
        const tiers = { 'SS': 1, 'S': 2, 'A': 3, 'B': 4};
        sortedCards.sort((a, b) => tiers[a.tier] - tiers[b.tier]);
    }
    loadCards(sortedCards);
})

const searchInput = document.querySelector('.search-input')
const searchButton = document.querySelector('.search-btn')

searchButton.addEventListener('click', () => {
    const text = searchInput.value.toLowerCase().trim();

    currentCards = allCards.filter(card => card.name.toLowerCase().includes(text));

    loadCards(currentCards);
})

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        searchButton.click();
    }
})

function loadData(){
    fetch('../data/support.json')
        .then(response => response.json())
        .then(data => {
            allCards = data;
            currentCards = data;

            loadCards(allCards);
        })
}    

function loadCards(cards) {
    const tableBody = document.querySelector('.data-body');

    if(!tableBody){
        console.log("container not found");
        return;
    }

    tableBody.innerHTML = '';

    cards.forEach(element => {
        const supportRow = document.createElement('tr');

        supportRow.innerHTML = `
            <td>
                <div class="cell-flex">
                    <img src="${element.image}" class="table-img">
                    <div class="details">
                        <span class="name">${element.name}</span>
                    </div>
                </div>
            </td>
            <td>${element.rarity}</td>
            <td><span class="tier-badge ${element.tier.toLowerCase()}">${element.tier}</span></td>`;

        tableBody.appendChild(supportRow);
    });
}