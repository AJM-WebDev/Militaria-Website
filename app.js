// Initialize and add the map
function initMap() {
    // Load in Location
    const uk = { lat: 52.4, lng: -1.2 };

    const malvernLocation = { lat: 52.0822984, lng: -2.3144888 };
    const dallasLocation = { lat: 51.4353652, lng: -1.2801911 };
    const warWheelsLocation = { lat: 52.975665, lng: -2.065624 };
    // The map, centered at UK
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: uk,
    });

    const stringMalvern = '<h2>Malvern Show</h2>'
    const infoMalvern = new google.maps.InfoWindow({
        content: stringMalvern,
    })
    const stringDallas = '<h2>Dallas Digout</h2>'
    const infoDallas = new google.maps.InfoWindow({
        content: stringDallas,
    })
    const stringWarWheels = '<h2>War Wheels</h2>'
    const infoWarWheels = new google.maps.InfoWindow({
        content: stringWarWheels,
    })

    // The marker, positioned at Uluru
    const malvern = new google.maps.Marker({
        position: malvernLocation,
        map: map,
        title: "Malvern Show",
    });
    malvern.addListener("click", () => {
        infoMalvern.open(map, malvern);
    })

    const dallas = new google.maps.Marker({
        position: dallasLocation,
        map: map,
        title: "Dallas Digout",
    });
    dallas.addListener("click", () => {
        infoDallas.open(map, dallas);
    })

    const warWheels = new google.maps.Marker({
        position: warWheelsLocation,
        map: map,
        title: "War Wheels",
    });
    warWheels.addListener("click", () => {
        infoWarWheels.open(map, warWheels);
    })
}

// Get the modal
let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}