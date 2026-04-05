document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

let allSkills = [];
let currentSkills = [];
const sortSelector = document.querySelector('.sort-dropdown')

sortSelector.addEventListener('change', () => {
    const criteria = sortSelector.value;

    let sortedSkills = [...currentSkills];
    if(criteria == 'Sort By: Default') {
        loadSkills(sortedSkills);
        return;
    }
    else if(criteria == 'Sort By: Rarity') {
        const rarities = { 'Unique': 1, 'Rare': 2, 'Normal': 3,};
        sortedSkills.sort((a, b) => rarities[a.rarity] - rarities[b.rarity]);
    }
    else if (criteria == 'Sort By: Type') {
        const types = { 'Passive': 1, 'Recovery': 2, 'Speed': 3, 'Debuff': 4};
        sortedSkills.sort((a, b) => types[a.type] - types[b.type]);
    }
    loadSkills(sortedSkills);
})

const searchInput = document.querySelector('.search-input')
const searchButton = document.querySelector('.search-btn')

searchButton.addEventListener('click', () => {
    const text = searchInput.value.toLowerCase().trim();

    currentSkills = allSkills.filter(skill => skill.name.toLowerCase().includes(text));

    loadSkills(currentSkills);
})

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter'){
        searchButton.click();
    }
})

function loadData(){
    fetch('../data/skills.json')
        .then(response => response.json())
        .then(data => {
            allSkills = data;
            currentSkills = data;

            loadSkills(allSkills);
        })
}    

function loadSkills(skills) {
    const tableBody = document.querySelector('.data-body');

    if(!tableBody){
        console.log("container not found");
        return;
    }

    tableBody.innerHTML = '';

    skills.forEach(element => {
        const skillRow = document.createElement('tr');

        skillRow.innerHTML = `
            <td>
                <div class="cell-flex">
                    <img src="${element.image}" alt="Kitasan Black" class="table-img">
                    <div class="details">
                        <span class="name">${element.name}</span>
                        <span class="desc">${element.description}</span>
                    </div>
                </div>
            </td>
            <td>${element.rarity}</td>
            <td>${element.type}</td>`;;

        tableBody.appendChild(skillRow);
    });
}