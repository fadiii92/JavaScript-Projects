let currentLocationDiv = document.querySelector('.currentLocation');
let previousLocationsDiv = document.querySelector('.previousLocations');
let checkInElement = document.querySelector('.addnewtask');

checkInElement.addEventListener('click', () => {
    //getting current location
    let latitude, longitude, city, state, country;
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            //reverse geomaping
            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
                .then(response => response.json())
                .then(data => {
                    city = data.address.city;
                    state = data.address.state;
                    country = data.address.country;
                    console.log(latitude, longitude, city, state, country)

                    //updating current location
                    let newlocation = document.createElement('div');
                    newlocation.classList.add('location');
                    newlocation.innerHTML = ` <span class="map-icon">📍</span>
                    <span class="location-text">
                        ${city}, ${state}, ${country}
                        <br>
                        <span class="coordinates">${longitude}° N, ${latitude}° E</span>
                      </span>`;
                    currentLocationDiv.innerHTML = '';
                    currentLocationDiv.appendChild(newlocation);

                })
                .catch(error => {
                    console.log(error);
                });
        });
    }
    else
        console.log('Geolocation is not supported by this browser');




        //updating previous locations
        let currenttoUpdate = currentLocationDiv.innerHTML;
        previousLocationsDiv.innerHTML += currenttoUpdate ;

        updateLocalStorage();

});
function updateLocalStorage(){
    localStorage.setItem('Previous Location',previousLocationsDiv.innerHTML);
    localStorage.setItem('Current Location',currentLocationDiv.innerHTML);
}
window.onload = ()=>{
    previousLocationsDiv.innerHTML = localStorage.getItem('Previous Location');
    currentLocationDiv.innerHTML = localStorage.getItem('Current Location');
}