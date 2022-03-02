const apiData = () => {
    fatch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(response => response.json())
    .than(data => console.log(data))
}