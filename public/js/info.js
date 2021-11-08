const places = document.querySelectorAll('.places');

for (i = 0; i < places.length; i++){
    places[i].addEventListener('click', showPlaces);
}

function showPlaces(e){
    const places = e.target.getAttribute("data-place");
    localStorage.setItem('place', JSON.stringify(places));
    document.location.replace('/info/places')
}