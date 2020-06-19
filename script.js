// retrieving the data from the API
url = "https://covid19-api.org/api/status";
const data = fetch(url);
data.then(function(response) {
        return response.json();
    })
    .then(function(response) {
        // updating the table using DOM manipulation
        const firstCountry = document.querySelector("#firstCountry");
        const firstCountryCases = document.querySelector("#firstCountryCases");
        const secondCountry = document.querySelector("#secondCountry");
        const secondCountryCases = document.querySelector("#secondCountryCases");
        firstCountry.textContent = response[0].country;
        secondCountry.textContent = response[1].country;
        firstCountryCases.textContent = response[0].cases;
        secondCountryCases.textContent = response[1].cases;
        // console.log(response);
    });

