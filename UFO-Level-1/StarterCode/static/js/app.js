// from data.js
var tableData = data;

// YOUR CODE HERE!
var tableselect = d3.select("tbody");
// var inputselect = d3.select("#text");
var filtertable = d3.select("#filter-btn");

function TableDefault() {
    tableData.forEach((ufodata) => {
        var newrow = tableselect.append("tr");
        Object.entries(ufodata).forEach(([key,value]) => {
            var newcell = newrow.append("td");
            newcell.text(value);
        });
    });
}

TableDefault();


// var searchinput = d3.select(".form-control").attr("placeholder");
// var tablerows = document.getElementsByTagName("tr");

filtertable.on("click", filtsel);

function filtsel() {
    d3.event.preventdefault();

    var entry = d3.select("#datetime");
    var entryval = entry.property("value");
    var filt = tableData.filter(row => row.datetime === entryval);
    console.log(filt);

    filt.forEach((ufodata) => {
        var newrow = tableselect.append("tr");
        Object.entries(ufodata).forEach(([key,value]) => {
            var newcell = newrow.append("td");
            newcell.text(value);
        });
    });
}

// Note: filtered rows append to bottom of existing table.