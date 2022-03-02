const searchPhone = () => {
    const phoneName = document.getElementById("phone-name").value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${phoneName}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) =>  viewPhone(data.data));
}

