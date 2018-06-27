// variables
var row = document.getElementsByClassName('row'); // row variable
var popup = document.getElementsByClassName('table__expand');
var tableBody = document.getElementsByClassName('table__body');
var navText = document.getElementsByClassName('nav__item--text');

// Attach event listeners to each row
for(var i = 0 ; i < row.length; i++) {
   row[i].addEventListener('click', toggleExpand);
}

//
// Function to swtich the visibility state of the popup
//


function toggleExpand(e) {

  // target row thats clicked


  var insertNode = tableBody[0].insertBefore(popup[0], e.target.parentNode);


  /*var selectedRow = e.target.parentNode;
  selectedRow.append(popup[0]); */


// INSERT CELL ATTEMPTED METHOD
  /* var cell = HTMLTableRowElement.insertCell(index = -1);
  selectedRow.append(cell);
  cell.append(popup[0]);

  //selectedRow.append(popup[0]);

  console.log(popup); */

//Attempting to append via parent node of tr to <table>. attach the new tr to table. append new row to e.target

  /* jsRow.ParentNode.append(jsTd);f
  jsTd.append(selectedRow); */

  //appending popup to selected row. butnot */

  if (popup[0].classList.contains('collapsed')) {
    popup[0].classList.toggle('collapsed');
  }


   //array required to distinguish between .table__expand and .collapsed[1]

}



// CREATE X BUTTON TO CLOSE THE SCREEN .EG. ADD CLASS COLLAPSED TO POPUP

// callback Initialise Map fucntion linked in script

function initMap() {

  //variable to edit map

  var options = {
    zoom: 16,
    center: {lat: 53.79595, lng: -1.54816},
    disableDefaultUI: true,
    styles: [
      {elementType: 'geometry',stylers: [{color: '#EFD8B1'}]}, //background color - pear lusta
      {
        featureType: 'road', elementType: 'geometry', stylers: [{color: '#111716'}]
      },
      {
        featureType: 'road', elementType: 'geometry.stroke', stylers: [{color: '#2D383A'}]
      },

      {
       featureType: 'road',
       elementType: 'labels.text.fill',
       stylers: [{color: '#9ca5b3'}]
     },
     {
       featureType: 'road.highway',
       elementType: 'geometry',
       stylers: [{color: '#746855'}]
     },
     {
       featureType: 'road.highway',
       elementType: 'geometry.stroke',
       stylers: [{color: '#1f2835'}]
     },
     {
       featureType: 'road.highway',
       elementType: 'labels.text.fill',
       stylers: [{color: '#f3d19c'}]
     },
     {
       featureType: 'transit',
       elementType: 'geometry',
       stylers: [{color: '#2f3948'}]
     },
     {
       featureType: 'transit.station',
       elementType: 'labels.text.fill',
       stylers: [{color: '#d59563'}]
     },
     {
       featureType: 'water',
       elementType: 'geometry',
       stylers: [{color: '#17263c'}]
     },
     {
       featureType: 'water',
       elementType: 'labels.text.fill',
       stylers: [{color: '#515c6d'}]
     },
     {
       featureType: 'water',
       elementType: 'labels.text.stroke',
       stylers: [{color: '#17263c'}]
     }

    ]
  };

  //look into this a bit more

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

// ----------  ^^^^^^^ MAP API ^^^^^^  --------------- //





for (var i = 0; i < navText.length; i++) {
  navText[i].addEventListener('click', circle, false);
}

function circle(e){


  var selectedNav = e.target.parentNode;
  var circle = 'url(/assets/media/shapes/nav_circle.svg)';

  selectedNav.style.backgroundImage = circle;
  selectedNav.style.backgroundRepeat = 'no-repeat';


  // NEED TO ADD ALTERNATE AND SELECT VAR
  // selectedNav.appendChild(circle);

  // selectedNav[0].classList.toggle(circle);

}

// ----- ^^^^^^^ ADD CIRCLE TO NAV ON CLICK ^^^^^ --------- //

// ----------  PAGE BUTTON/SCROLL DIRECT ------------- //


/* var navLinks = document.getElementsByClassName('nav__items');

for(var i = 0; i < navLinks.length; i++) {
  navLinks[i].onclick = scroll;
}

function scroll(e) {

  e.preventDefault();
  var id = this.getAttribute('href').replace('#', ''); //maybe needs Space
  var target = document.getElementById(id).getBoundingClientRect().top;
  animateScroll(target);

  function animateScroll(targetHeight) {
    targetHeight = document.body.scrollHeight - window.innerHeight > targetHeight + scrollY ?
        targetHeight : document.body.scrollHeight - window.innerHeight;
    var initialPosition = window.scrollY;
    var SCROLL_DURATION = 30;
    var step_x = Math.PI / SCROLL_DURATION;
    var step_count = 0;
    requestAnimationFrame(step);
    function step() {
        if (step_count < SCROLL_DURATION) {
            requestAnimationFrame(step);
            step_count++;
            window.scrollTo(0, initialPosition + targetHeight * 0.25 * Math.pow((1 - Math.cos(step_x * step_count)), 2));
          }
        }

    }
}

*


// MY ATTEMPT ----- >


/* navBooking.addEventListener('click', function(){

  var booking = document.getElementById('js-booking');
  booking.scrollIntoView(true);
  //console.log(booking);
  // WORKS WITH BUTTONS
});
*/




// <tr class="ssdfsdf" data-id="1">
// e.target.data.id

// <tr class="ssdfsdf" data-id="2">
var dbEntry = phoneDb[e.target.data.id] // assign each array to specific row

// dbEntry["make"]

// document.getElementById('popUp_model').innerHtml = dbEntry["make"]

var phoneDb = [
  1: {
    "make": "Apple",
    "model": "iPhone 3",
    "screenSize", "100x100px",
    "imageUrl": "htttp://example.com/iphone.jpg"
  },
  2: {
    "make": "Apple",
    "model": "iPhone 2",
    "screenSize", "100x100px",
    "imageUrl": "htttp://example.com/iphone.jpg"
  },
  {

  }
]
