// Search any phone.
const searchPhone = () => {
    // Remove all phone information 
    document.getElementById("phone-info").innerHTML = "";
    // Remove phone details 
    document.getElementById("phone-details").innerHTML = "";
    const phoneName = document.getElementById("phone-name").value;
    if (phoneName === 0) {
        alert("Input a valid name");
    }
    else {
        const url = `https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => viewPhone(data.data));
    };
    // Remove phone name in search Bar.
    document.getElementById("phone-name").value = "";
}
// Collect phone into API.
const viewPhone = (phones) => {
    if (phones.length === 0) {
        const phoneShows = document.getElementById("phone-info");
        phoneShows.innerHTML = `
        <h3>Please enter a valide phone name</h3>`
    }
    else {
        for (const phone of phones) {
            if (phones.indexOf(phone) === 20) {
                return phone;
            }
            const viewPhones = document.getElementById('phone-info');
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="col">
                    <div class="card h-100 shadow bg-white rounded" align-items-center">
                        <img src="${phone.image}" class="card-img-top img-fluid m-auto my-2 w-50" alt="...">
                        <div class="card-body m-auto">
                            <h5 class="card-title">${phone.phone_name}</h5>
                            <p class="card-text">${phone.brand}</p>
                        <button onclick="detailsPhone('${phone.slug}')" class="bg-primary rounded border-0 text-light px-3">More details</button>
                    </div>
                </div>
            </div>`;
            viewPhones.appendChild(div);
        };
    };
};
// Phone Details Creation
const detailsPhone = (demoDetails) => {
    document.getElementById("phone-details").innerHTML = "";

    const url = `https://openapi.programming-hero.com/api/phone/${demoDetails}`
    fetch(url)
        .then((response) => response.json())
        .then((data) => detailsSet(data.data))
}
const detailsSet = (mainDetails) => {
    if (mainDetails.releaseDate === "") {
        date = 'Release Date Not Found';
    }
    else if (mainDetails.others === undefined) {
        mainDetails.others = {
            WLAN: "Not Found",
            Bluetooth: "Not Found",
            GPS: "Not Found",
            NSB: "Not Found",
            Radio: "Not Found",
            USB: "Not Found"
        };
    }
    const detailSet = document.getElementById("phone-details");
    const div = document.createElement('div')
    div.innerHTML = `
        <div class="card justify-content-center mx-auto">
                    <img class="card-img-top img-fluid w-50 m-auto my-3" src="${mainDetails.image}" alt="Card image cap">
                    <div class="card-body">
                      <h5 class="card-title">${mainDetails.name}</h5>
                      <p class="card-text">${mainDetails.releaseDate}</p>
                    </div>
                    <h6 class="mx-3">Main Features</h6>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Storage:</b> ${mainDetails.mainFeatures.storage}</li>
                    <li class="list-group-item"><b>Chipset:</b> ${mainDetails.mainFeatures.chipSet}</li>
                    <li class="list-group-item"><b>Display size:</b> ${mainDetails.mainFeatures.displaySize}</li>
                    <li class="list-group-item"><b>Memory:</b> ${mainDetails.mainFeatures.memory}</li>
                    <h6 class="mx-3">Sensore</h6>
                    <li class="list-group-item"><b>Sensor:</b> ${mainDetails.sensors}</li>
                    </ul>
                    <h6 class="mx-3">Others info</h6>
                    <ul class="list-group m-2 list-group-flush">
                      <li class="list-group-item"><b>Bluetooth:</b> ${mainDetails.others.Bluetooth}</li>
                      <li class="list-group-item"><b>GPS:</b> ${mainDetails.others.GPS}</li>
                      <li class="list-group-item"><b>NSB:</b> ${mainDetails.others.NSB}</li>
                      <li class="list-group-item"><b>RADIO:</b> ${mainDetails.others.Radio}</li>
                      <li class="list-group-item"><b>USB:</b> ${mainDetails.others.USB}</li>
                      <li class="list-group-item"><b>WLAN:</b> ${mainDetails.others.WLAN}</li>
                    </ul>
                  </div>
        `;
    detailSet.appendChild(div);
}