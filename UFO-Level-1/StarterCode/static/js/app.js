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

filtertable.on("click", filtselect);

function filtselect() {
    d3.event.preventDefault();

    var entry = d3.select("#datetime");
    var entryval = entry.property("value");
    var filt = tableData.filter(row => row.datetime === entryval);
    console.log(filt);

    d3.select("#ufo-table").select("tbody").remove();
    d3.select("#ufo-table").insert("tbody");
    tbodynew = d3.select("#ufo-table>tbody");

    filt.forEach((ufodata) => {
        var newrow = tbodynew.append("tr");
        Object.entries(ufodata).forEach(([key,value]) => {
            var newcell = newrow.append("td");
            newcell.text(value);
        });
    });
}