
// test console log of an array of the keys of the javascript object (dataset)
console.log(Object.keys(data[0]));

// assign array of keys as a variable 'keys'
var keys = Object.keys(data[0]);

// create table column names for the keys
keys.forEach(function(key) {

    // select html tag and append "th" tag element
    var trHead = d3.select("thead > tr");
    var th = trHead.append("th");

    var column = upperCaseString(key);

    // add the key name as a column 
    th.text(column);
});



// create a function to split string and uppercase string then rejoin 
function upperCaseString(string) {
    var uppercaseFirstLetter = string.charAt(0).toUpperCase();
    var stringWithoutFirstLetter = string.slice(1);
    var final_string = uppercaseFirstLetter + stringWithoutFirstLetter;

    //return string with first letter uppercased
    return final_string;
}



// first create variable to select 'tbody'
var tbody = d3.select("tbody")


// create rows of each data in the javascript object 
data.forEach(function(sighting) {
    var row = tbody.append("tr");
        
        // .forEach method to apply function to each object in javascript data object
        Object.entries(sighting).forEach(function([key, value]) {
            
            // variable to create a row cell
            var cell = row.append("td");
            
            // conditional to check if key value is a "city"
            if (key == "city") {
                
                // convert string into elements for each word in city string value
                var cityStrArray = value.split(" ");
                
                // uppercase the first letter in each word in the city string value
                var cityWord = cityStrArray.map(function(word){return upperCaseString(word);});
                
                // joins the list of words into one string value
                var city = cityWord.join(" ")

                // enter city value into table
                cell.text(city);
            }
            
            // conditional to check if key is "shape"
            else if (key == "shape") {

                string = upperCaseString(key);

                cell.text(string);
            }

            // capitalize all letters for state and country
            else if (key == "state" || key == "country") {
                upperCase = value.toUpperCase();
                cell.text(upperCase);
            }
            else if (key == "comments") {
                var description = he.decode(value);
                cell.text(description);
            }
            else {
                cell.text(value);
            }
        });
});



// function to create input form 
function myFunction() {
    var input_date, input_city, input_state, input_country, input_shape;
    var filter_date, filter_city, filter_state, filter_country, filter_shape;
    var table, tr, td, i;
    
    input_date = document.getElementById("datetime");
    input_city = document.getElementById("city");
    input_state = document.getElementById("state");
    input_country = document.getElementById("country");
    input_shape = document.getElementById("shape");

    filter_date = input_date.value;
    filter_city = input_city.value.toUpperCase();
    filter_state = input_state.value.toUpperCase();
    filter_country = input_country.value.toUpperCase();
    filter_shape = input_shape.value.toUpperCase();


    table = document.getElementById("example");

    tr = table.getElementsByTagName("tr");
    
    for (i = 0; i < tr.length; i++) {
        var td_date = tr[i].getElementsByTagName("td")[0];
        var td_city = tr[i].getElementsByTagName("td")[1];
        var td_state = tr[i].getElementsByTagName("td")[2];
        var td_country = tr[i].getElementsByTagName("td")[3];
        var td_shape = tr[i].getElementsByTagName("td")[4];


        if (td_date && td_city && td_state && td_country && td_shape) {
            if ( (td_date.innerHTML.indexOf(filter_date) > -1) && 
                (td_city.innerHTML.toUpperCase().indexOf(filter_city) > -1) &&
                (td_state.innerHTML.toUpperCase().indexOf(filter_state) > -1) &&
                (td_country.innerHTML.toUpperCase().indexOf(filter_country) > -1) &&
                (td_shape.innerHTML.toUpperCase().indexOf(filter_shape) > -1) 
                ) {
                    tr[i].style.display = "";
                } 
            else {
                tr[i].style.display = "none";
            }
        }       
    }
}

