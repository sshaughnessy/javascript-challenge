// from data.js
var tableData = data;

// YOUR CODE HERE!

//reference to html table
var tbody = d3.select("tbody");

//what does data look like
/*
{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  }
*/
//for loop - goes through each row/col and appends values to tbody
tableData.forEach(
    //rows
    function(ufoData) {
        var row = tbody.append("tr"); 
        var values = Object.values(ufoData);
        values.forEach(
            //columns
            function(val) {
                row.append("td").text(val); 
        });
    }
);
//select button
var button = d3.select("#filter-btn");
//select form
var form = d3.select("#form");
//event handlers
button.on("click", runEnter);
form.on("submit", preventSubmit);

//prevent submit function
function preventSubmit() {
    d3.event.preventDefault();
}

//run enter function
function runEnter() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    //clear existing unfiltered td
    tbody.html("")
    //filter by inputValue above
    var filteredData = tableData.filter(function(day) {
        return day.datetime === inputValue
    });
    if (inputValue === "") {
        tableData.forEach( 
            function(ufoData) {
                var row = tbody.append("tr"); 
                var values = Object.values(ufoData);
                values.forEach(
                    function(val) {
                        row.append("td").text(val); 
                });
            }
        );
    } else {
        filteredData.forEach(
            function(ufoData) {
                var row = tbody.append("tr"); 
                var values = Object.values(ufoData);
                values.forEach(
                    function(val) {
                        row.append("td").text(val); 
                });
            }
        )
        
    }

};