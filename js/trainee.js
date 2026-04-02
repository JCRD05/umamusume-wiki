document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

let trainees = [];

const sortSelector = document.querySelector('.sort-dropdown')

sortSelector.addEventListener('change', () => {
    const criteria = sortSelector.value;

    let sortedTrainees = [...trainees];
    if(criteria == 'Sort By: Default') {
        loadTrainees(trainees);
        return;
    }
    else if(criteria == 'Sort By: Rarity') {
        sortedTrainees.sort((a, b) => parseInt(b.rarity) - parseInt(a.rarity));
    }
    else if (criteria == 'Sort By: Tier') {
        const tiers = { 'SS': 1, 'S': 2, 'A': 3, 'B': 4};
        sortedTrainees.sort((a, b) => tiers[a.tier] - tiers[b.tier]);
    }
    loadTrainees(sortedTrainees);
})

function loadData(){
    fetch('../data/trainee.json')
        .then(response => response.json())
        .then(data => {
            trainees = data;

            loadTrainees(trainees);
        })
}    

function loadTrainees(trainees) {
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
            <td>${element.tier}</td>`;
        
        tableBody.appendChild(traineeRow);
    });
}