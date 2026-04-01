document.addEventListener('DOMContentLoaded', () => {
    loadTierlist();
});

function loadTierlist(){
    fetch("../data/tierlist.json")
        .then(response => response.json())
        .then(data => {
            const tierlistBody = document.getElementById('tierlist-body');

            if(!tierlistBody){
                console.log("container not found");
                return;
            }

            tierlistBody.innerHTML = '<th colspan="2"><h2>Tier List</h2></th>';

            data.forEach(element => {
                const tierRow = document.createElement('tr');

                tierRow.innerHTML = `
                    <td>${element.tier}</td>
                    <td class="tier-trainees"></td>`;

                const trainees = tierRow.querySelector('.tier-trainees');

                element.trainees.forEach(element =>{
                    const trainee = document.createElement('img');
                    trainee.src = element.image;
                    trainee.title = element.name;
                    trainee.className = 'trainee-image';

                    trainees.appendChild(trainee);
                })

                tierlistBody.appendChild(tierRow);
            });
        })
}