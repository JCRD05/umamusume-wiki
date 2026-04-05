document.addEventListener('DOMContentLoaded', () => {
    loadTierlist('../data/trainee-tierlist.json');
});

const tabs = document.querySelectorAll('.tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        if (tab.classList.contains('active')) return;

        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const fileName = tab.getAttribute('data-file')
        loadTierlist(fileName);
    })
})

function loadTierlist(fileName){
    fetch(fileName)
        .then(response => response.json())
        .then(data => {
            const tierlistBody = document.getElementById('tierlist-body');

            if(!tierlistBody){
                console.log("container not found");
                return;
            }

            tierlistBody.innerHTML = '';

            data.forEach(element => {
                const tierRow = document.createElement('tr');

                tierRow.innerHTML = `
                    <td>${element.tier}</td>
                    <td class="tier-members"></td>`;

                const members = tierRow.querySelector('.tier-members');

                element.members.forEach(element =>{
                    const member = document.createElement('img');
                    member.src = element.image;
                    member.title = element.name;
                    member.className = 'member-image';

                    members.appendChild(member);
                })

                tierlistBody.appendChild(tierRow);
            });
        })
}