// callback Initialise Map fucntion linked in script

function initMap() {

  //variable to edit map

  var options = {
    zoom: 16,
    center: {lat: 53.79595, lng: -1.54816}
  }

  //link ID to map

  var map = new google.maps.Map(document.getElementById('js-googleMap'), options); // <-- include options object

  var marker = new google.maps.Marker({
    position: {lat:53.7957, lng:-1.5507},
    map:map,
    label: {
       color: 'rgba(45, 56, 58, 1)', //Outer Space
       //font-size: '1.2em',
       text: 'Ayup Digital',
    }
  });

}






// variables
var row = document.getElementsByClassName('row'); // row variable
var popup = document.getElementsByClassName('table__expand');

var table = document.getElementsByClassName('table');
// Attach event listeners to each row
for(var i = 0 ; i < row.length; i++) {
   row[i].addEventListener('click', toggleExpand);
}

//
// Function to swtich the visibility state of the popup
//
function toggleExpand(e) {

  // target row thats clicked
  var selectedRow = e.target.parentNode;

  // create new tr and td upon click
  var jsRow = document.createElement('tr');
  var jsTd = document.createElement('td');

  // attempted appening upon click but no luck
  // jsRow.appendChild(jsTd);
  //jsTd.append(popup[1]);

  console.log(selectedRow.ParentNode);

  selectedRow.ParentNode.append(jsRow);
  jsRow.ParentNode.append(jsTd);
  jsTd.append(popup[1]);
  //appending popup to selected row. butnot

  popup[0].classList.toggle('collapsed');
   //array required to distinguish between .table__expand and .collapsed[1]

}



// CREATE X BUTTON TO CLOSE THE SCREEN .EG. ADD CLASS COLLAPSED TO POPUP
