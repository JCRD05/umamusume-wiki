document.addEventListener('DOMContentLoaded', () => {
    loadBanners();
});

function loadBanners() {
    fetch('../data/banner.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('.data-body');

            if(!tableBody){
                console.log("container not found");
                return;
            }

            tableBody.innerHTML = '';

            data.forEach(element => {
                const traineeRow = document.createElement('tr');

                traineeRow.innerHTML = `
                    <td>
                        <div class="cell-flex">
                            <img src="${element.image}" class="banner-image" title="${element.name}">
                            <div class="names-group">
                                <span class="name">${element.trainees}</span>
                                <span class="name">${element.supports}</span>
                            </div>
                        </div>
                    </td>
                    <td>${element.availability}</td>`

                tableBody.appendChild(traineeRow);
            });
        })
}