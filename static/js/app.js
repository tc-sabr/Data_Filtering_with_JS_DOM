// from data.js
var tableData = data;

//select the Filter Table button
var submit = d3.select('#filter-btn');

//select table body
var tbody = d3.select('tbody');

//click handler for datetime form
submit.on('click', function() {

    //prevent page refresh
    d3.event.preventDefault();

    //select input element and get raw HTML
    var inputElem = d3.select('#datetime');

    //get value property of the input
    var inputVal = inputElem.property('value');

    console.log(inputVal);
    
    //filter the data
    var filtered = tableData.filter(ufo => ufo.datetime === inputVal);

    console.log(filtered);

});