"use strict"

// fetching country data from the API
async function fetchData() {
    const response = await fetch("https://covid19-api.org/api/status");
    const data = await response.json();
    return data;
}

// updating the table using DOM manipulation
fetchData()
    .then(data => {
        const tableData = document.querySelectorAll('.rowData');
        console.log(data);
        let rowNumber = 0;
        let temp = 0;
        tableData.forEach(row => {
            row.firstElementChild.textContent = data[rowNumber].last_update;
            document.getElementById("C"+temp).textContent = data[rowNumber].country;
            row.lastElementChild.textContent = data[rowNumber].cases;
            rowNumber++;
            temp++;            
        });
    });
