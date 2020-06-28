"use strict"

// fetching country data from the API
async function fetchStatusData() {
    const response = await fetch("https://covid19-api.org/api/status");
    const data = await response.json();
    return data;
}

// updating the table using DOM manipulation
fetchStatusData()
    .then(data => {
        let table = document.createElement("table");
        const numCountries = 50;
        const numCollumns = 3;
        let thCountry = document.createElement("th");
        let thCases = document.createElement("th");
        let countryHeader = document.createTextNode("Country");
        let casesHeader = document.createTextNode("Confirmed Cases");
        thCountry.appendChild(countryHeader);
        thCases.appendChild(casesHeader);
        table.appendChild(thCountry);
        table.appendChild(thCases);
        for (let i = 0; i < numCountries; i++) {
            let tr = document.createElement("tr");
            let tdCountry = document.createElement("td");
            let tdCases = document.createElement("td");
            let countryText = document.createTextNode(data[i].country);
            let casesText = document.createTextNode(data[i].cases);
            tdCountry.appendChild(countryText);
            tdCases.appendChild(casesText);
            tr.appendChild(tdCountry);
            tr.appendChild(tdCases);
            table.appendChild(tr);
        }
        document.getElementById("countryTableSection").appendChild(table);
    })
    .catch(error => console.log(error));
