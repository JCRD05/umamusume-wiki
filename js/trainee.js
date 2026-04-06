document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

let allTrainees = [];
let currentTrainees = [];
const sortSelector = document.querySelector('.sort-dropdown')

sortSelector.addEventListener('change', () => {
    const criteria = sortSelector.value;

    let sortedTrainees = [...currentTrainees];
    if(criteria == 'Sort By: Default') {
        loadSkills(sortedTrainees);
        return;
    }
    else if(criteria == 'Sort By: Rarity') {
        const rarities = { '★': 1, '★★': 2, '★★★': 3};
        sortedTrainees.sort((a, b) => rarities[b.rarity] - rarities[a.rarity]);
    }
    else if (criteria == 'Sort By: Tier') {
        const tiers = { 'SS': 1, 'S': 2, 'A': 3, 'B': 4};
        sortedTrainees.sort((a, b) => tiers[a.tier] - tiers[b.tier]);
    }
    loadSkills(sortedTrainees);
})

const searchInput = document.querySelector('.search-input')
const searchButton = document.querySelector('.search-btn')

searchButton.addEventListener('click', () => {
    const text = searchInput.value.toLowerCase().trim();

    currentTrainees = allTrainees.filter(trainee => trainee.name.toLowerCase().includes(text));

    loadSkills(currentTrainees);
})

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        searchButton.click();
    }
})

function loadData(){
    fetch('../data/trainee.json')
        .then(response => response.json())
        .then(data => {
            allTrainees = data;
            currentTrainees = data;

            loadSkills(allTrainees);
        })
}    

function loadSkills(trainees) {
    const tableBody = document.querySelector('.data-body');

    if(!tableBody){
        console.log("container not found");
        return;
    }

    tableBody.innerHTML = '';

    trainees.forEach(element => {
        const traineeRow = document.createElement('tr');

        traineeRow.innerHTML = `
            <td>
                <div class="cell-flex">
                    <img src="${element.image}" class="trainee-image" title="${element.name}">
                    <span class="name">${element.name}</span>
                </div>
            </td>
            <td>${element.rarity}</td>
            <td><span class="tier-badge ${element.tier.toLowerCase()}">${element.tier}</span></td>`;

        tableBody.appendChild(traineeRow);
    });
}