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

// 1. SELECT INPUT
// var input = d3.select(".form-control").attr("placeholder")

// 2. COMPARE INPUT TO DATE COLUMN
// var tablerows = document.getElementsByTagName("tr")[i]

// 3. RETURN ROWS

// 4. REPLACE DATA VARIABLE WITH NEW ROWS

// 5. UPDATE TABLEDEFAULT FUNCTION

// filtertable.on("click", datesearch);

// var input = d3.select(".form-control").attr("placeholder");
// // console.log(input);
// var trow = d3.select("tbody>tr");
// var rowvalue = d3.select("tbody>tr>td").text();

// 
// filtertable.on("click", testingfin);

// Logic: When the button is clicked, grab the text in the input box, search the date column for matching text and return the whole row
// var searchterms = d3.event.target.value;
var searchinput = d3.select(".form-control").attr("placeholder");
var tablerows = document.getElementsByTagName("tr");
var newdata = [];

function datesearch(event) {
    searchtext = d3.event.target.value;
    for (var i = 1; i < tablerows.length; i++) {
        var tableDates = tablerows[i].getElementsByTagName("td")[0];
            datetext = tableDates.innerText;
            if (datetext = searchtext) {
                // console.log(tablerows[i]);
                newdata.push(tablerows[i]);
                // return newdata;
            }
        }
    }

filtertable.on("click", datesearch);

// function newtable() {
//     newdata.forEach((ufodata) => {
//         var newrow = tableselect.append("tr");
//         Object.entries(ufodata).forEach(([key,value]) => {
//             var newcell = newrow.append("td");
//             newcell.text(value);
//         });
//     });
// }

// newtable();
// datesearch();

//         // d3.select("tbody>tr>td").text()
//         output = []
//         var searchterms = document.getElementsById("datetime");
//         // d3.select("#datetime")
//         // if (tableDates = searchinput) {
//         //     output.append(tablerows[i])
//         // };
//         if (tableDates) {
//             if (searchterms.length == 0)
//         }
//     };
//     return output;
//     };

// function datesearch() {
//     var inputs = document.getElementById("datetime");
//     // var filter = inputs.value.toUpperCase();
//     var table = document.getElementById("ufo-table");
//     console.log(table)
//     var row = table.getElementsByTagName("tr");
//     console.log(row)
    // for (i=0; i<row.length; i++) {
    //     dataline = row[i].getElementsByTagName("td")[0];
    //     console.log(dataline);
    //     if (dataline) {
    //         txtValue = dataline.textContent || dataline.innerText;
    //         if (txtValue.indexOf(inputs) > -1) {
    //             row[i].style.display = "none";
    //         }
    //     }
    
    // }
    // var dataline = row[i].getElementsByTagName("td")[0];
    // var txtValue = dataline.textContent || dataline.innerText;
    // }

// filtertable.on("click", datesearch);

