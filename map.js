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