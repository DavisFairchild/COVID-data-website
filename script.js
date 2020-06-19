// selecting the element for DOM manipulation
const southAfrica = document.querySelector("#southAfrica");

// retrieving the data from the API
url = "https://api.covid19api.com/live/country/united-states/status/confirmed";
const data = fetch(url, {mode: "cors"});
data.then(response => response.json()).then(data => console.log(data));
