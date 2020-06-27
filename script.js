// retrieving the data from the API
url = "https://covid19-api.org/api/status";
const data = fetch(url);
data.then(function(response) {
        return response.json();
    })
    .then(function(response) {
        // updating the table using DOM manipulation
        const tableData = document.querySelectorAll('.rowData');
        let rowNumber = 0;
        tableData.forEach((row) => {
            row.firstElementChild.textContent = response[rowNumber].country;
            row.lastElementChild.textContent = response[rowNumber].cases;
            rowNumber++;
        });
    });
