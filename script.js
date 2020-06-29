"use strict"

// fetching COVID-19 data from the API by country
async function fetchStatus() {
    const response = await fetch("https://covid19-api.org/api/status");
    const data = await response.json();
    return data;
}

// updating the table using DOM manipulation
fetchStatus()
    .then(data => {
        let table = document.createElement("table");
        const numCountries = 50;
        const numCategories = 4;
        const tableHeaders = ["Country", "Confirmed Cases", "Recovered", "Deaths"];
        const jsonMembers = ["country", "cases", "recovered", "deaths"];
        for (let i = 0; i < numCategories; i++) {
            let th = document.createElement("th");
            let thText = document.createTextNode(tableHeaders[i]);
            th.appendChild(thText);
            table.appendChild(th);
        }
        for (let i = 0; i < numCountries; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < numCategories; j++) {
                let td = document.createElement("td");
                let tdText = document.createTextNode(data[i][jsonMembers[j]]);
                td.appendChild(tdText);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.getElementById("countryTableSection").appendChild(table);
    })
    .catch(error => console.log(error));
