cinemaSelector = document.querySelector('#cinemaSelector');
moviesContainer = document.querySelector('#moviesContainer');
cinemaName = document.querySelector('.titulocine');

cinemaSelector.addEventListener('change', CineOpcionEscogida);

const MoviesEscazu = [];
MoviesEscazu.push({
    name: "Blanca Nieves y los Siete Enanitos",
    date: "20 de Octubre",
    hour: "6PM / 7PM / 8PM",
    image: "https://web-ticketing.novacinemas.cr/CDN/Image/Entity/FilmPosterGraphic/HO00001409",
});
MoviesEscazu.push({
    name: "Cenicienta",
    date: "18 de Octubre",
    hour: "6PM / 7PM / 8PM",
    image: "https://web-ticketing.novacinemas.cr/CDN/Image/Entity/FilmPosterGraphic/HO00001408",
});

const MoviesSanPedro = [];
MoviesSanPedro.push({
    name: "El Exorcista: Creyentes",
    date: "20 de Octubre",
    hour: "6PM / 7PM / 8PM",
    image: "https://web-ticketing.novacinemas.cr/CDN/Image/Entity/FilmPosterGraphic/HO00001399",
});
MoviesSanPedro.push({
    name: "Gran Turismo: De Jugador A Corredor",
    date: "23 de Octubre",
    hour: "6PM / 7PM / 8PM",
    image: "https://web-ticketing.novacinemas.cr/CDN/Image/Entity/FilmPosterGraphic/HO00001375",
});

function CineOpcionEscogida() {
    var selectedValue = cinemaSelector.value;

    moviesContainer.innerHTML = "";
    
    if (selectedValue == "Cine Escazu") {
        cinemaName.innerHTML = "Cartelera de " + selectedValue;

        for (movie of MoviesEscazu) {
            const moviesCard = document.createElement('div');
            moviesCard.classList.add('movies-Card');

            const imgMovie = document.createElement('img');
            imgMovie.setAttribute('src', movie.image);
            imgMovie.classList.add('movie-image')

            const InfoMovie = document.createElement('div');
            InfoMovie.classList.add('info-movie');

            const MovieTitle = document.createElement('h2');
            MovieTitle.innerText = movie.name;

            const MovieHour = document.createElement('h3');
            MovieHour.innerText = "Horario: " + movie.hour;

            const MovieDate = document.createElement('h3');
            MovieDate.innerText = "Fecha: " + movie.date;
            

            InfoMovie.appendChild(MovieTitle);
            InfoMovie.appendChild(MovieHour);
            InfoMovie.appendChild(MovieDate);

            moviesCard.appendChild(imgMovie);
            moviesCard.appendChild(InfoMovie);
            moviesContainer.appendChild(moviesCard);
        }
    } 
    else if (selectedValue == "Cine San Pedro") {
        cinemaName.innerHTML = "Cartelera de " + selectedValue;

        for (movie of MoviesSanPedro) {
            const moviesCard = document.createElement('div');
            moviesCard.classList.add('movies-Card');

            const imgMovie = document.createElement('img');
            imgMovie.setAttribute('src', movie.image);
            imgMovie.classList.add('movie-image')

            const InfoMovie = document.createElement('div');
            InfoMovie.classList.add('info-movie');

            const MovieTitle = document.createElement('h2');
            MovieTitle.innerText = movie.name;

            const MovieHour = document.createElement('h3');
            MovieHour.innerText = "Horario: " + movie.hour;

            const MovieDate = document.createElement('h3');
            MovieDate.innerText = "Fecha: " + movie.date;
            

            InfoMovie.appendChild(MovieTitle);
            InfoMovie.appendChild(MovieHour);
            InfoMovie.appendChild(MovieDate);

            moviesCard.appendChild(imgMovie);
            moviesCard.appendChild(InfoMovie);
            moviesContainer.appendChild(moviesCard);
        }
    } 
        
        // moviesContainer.innerHTML = ""; // Limpia el contenido si se selecciona un cine
    
}
