// variables
var row = document.getElementsByClassName('row'); // row variable
var popup = document.getElementsByClassName('table__expand');
var table = document.getElementsByClassName('table');
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
  var selectedRow = e.target;

/*   // create new tr and td upon click
  var jsRow = document.createElement('tr');
  var jsTd = document.createElement('td');

  // attempted appening upon click but no luck
  jsRow.appendChild(jsTd);
  jsTd.append(popup[1]);
*/
  selectedRow.append(popup[0]);

//Attempting to append via parent node of tr to <table>. attach the new tr to table. append new row to e.target

  /* jsRow.ParentNode.append(jsTd);
  jsTd.append(selectedRow); */

  //appending popup to selected row. butnot */

  //popup[0].classList.toggle('collapsed');
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
  navText[i].addEventListener('click', circle);
}

function circle(e){

  var selectedNav = e.target;
  var circle = document.createElement('img');
  circle.src = '/assets/media/shapes/nav_circle.svg';
  // NEED TO ADD ALTERNATE AND SELECT VAR
  selectedNav.appendChild(circle);

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
