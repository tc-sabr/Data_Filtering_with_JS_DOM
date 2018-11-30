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

    //loop through filtered and console.log
    filtered.forEach(function(sighting) {

        console.log(sighting);

        //create new row for data
        var row = tbody.append('tr');

        //set object entries and console log each sighting
        Object.entries(sighting).forEach(function([key, value]) {
            console.log(key, value);

            //append data to cells
            var cell = row.append('td').text(value);
    
        });
    
    });

});