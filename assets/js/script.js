// Declare map locations data array
const locations = [{
        name: "Holy Cross Mountains",
        description: "'They may not be the tallest, but they are certainly some of the oldest natural formations in Europe. (...) Lands where pagans loved to live freely. Where the long lustful nights full of barbaric drinks and rituals around the bonfire gave birth to the legends of Baba Yaga.'",
        col: 64,
        row: 27
    },
    {
        name: "High School",
        description: "'The first days of year one were the most important. Older students would recognize who was made of what after primary school. Traditional bullying greetings had begun. Bullies searched for the cats on first breaks. A cat was a rookie. A new guy. Someone they didn’t know. Someone they could cut down in size.'",
        col: 15,
        row: 72
    },
    // Add 4-6 locations more
]

// Setting up main variables for the Map Section
const mapContainer = document.getElementById('map-container');
const mapImage = document.getElementById('map-image');
const mapDescription = document.getElementById('map-description');

function loadMap() {
    locations.forEach(location => {

        // Declaring amount of grid columns and rows
        const gridColumnNumber = 100;
        const gridRowNumber = 100;

        // Creating new element for the map - a floating dot
        const floatingDot = document.createElement('div');

        // Add the floating dot according to styling in CSS
        floatingDot.classList.add("floating-dot");

        // Declaring position coordinates for each location 
        const leftPosition = (location.col / gridColumnNumber) * 100;
        const topPosition = (location.row / gridRowNumber) * 100;

        // Assigning locations to each floating dot
        floatingDot.style.left = `${leftPosition}%`;
        floatingDot.style.top = `${topPosition}%`;

        // Add the floating dot to the map image
        mapContainer.appendChild(floatingDot)

    })
}

window.onload = function () {
    loadMap();
}