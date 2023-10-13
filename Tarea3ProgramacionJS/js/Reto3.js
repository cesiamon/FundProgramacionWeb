cinemaSelector = document.querySelector('#cinemaSelector');
cinemaSelector2 = document.querySelector('#cinemaSelector2');
moviesContainer = document.querySelector('#moviesContainer');
cinemaName = document.querySelector('.titulocine');

cinemaSelector.addEventListener('change', CineOpcionEscogida);
cinemaSelector.addEventListener('change', CineOpcionEscogida2);

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

const MoviesTerramall = [];
MoviesTerramall.push({
    name: "La patrulla canina: La superpelícula",
    date: "20 de Octubre",
    hour: "6PM / 7PM / 8PM",
    image: "https://web-ticketing.novacinemas.cr/CDN/Image/Entity/FilmPosterGraphic/HO00001400",
});

MoviesTerramall.push({
    name: "Más de 40 y qué?",
    date: "20 de Octubre",
    hour: "6PM / 7PM / 8PM",
    image: "https://web-ticketing.novacinemas.cr/CDN/Image/Entity/FilmPosterGraphic/HO00001406",
});

function CineOpcionEscogida() {
    var selectedValue2 = document.querySelector("#cinemaSelector2");
    var selectedValue = cinemaSelector.value;

    if(selectedValue2 != ""){
        cinemaSelector2.style.display = "block"
        moviesContainer.innerHTML = "";
    }

    if (selectedValue == "Cine Escazu") {
        cinemaName.innerHTML = "Cartelera de " + selectedValue;
        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Cargando informacion, un momento por favor...',
            timer: 1000,
        });

        setTimeout (() => {

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
    },1200)
    } 
    else if (selectedValue == "Cine San Pedro") {
        cinemaName.innerHTML = "Cartelera de " + selectedValue;

        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Cargando informacion, un momento por favor...',
            timer: 1000,
        });

        setTimeout (() => {

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
    },1200)
    }
    else if(selectedValue == "Cine TerraMall") {
        cinemaName.innerHTML = "Cartelera de " + selectedValue;

        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Cargando informacion, un momento por favor...',
            timer: 1000,
        });

        setTimeout (() => {

        for (movie of MoviesTerramall) {
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
    },1200)
    }
    
}  



function CineOpcionEscogida2(){
    var selectedValue2 = cinemaSelector2.value;

    if (selectedValue2 == "Cine Escazu") {
        moviesContainer.innerHTML = '';
        cinemaName.innerHTML = "Cartelera de " + selectedValue2;

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
    else if (selectedValue2 == "Cine San Pedro") {
        moviesContainer.innerHTML = '';
        cinemaName.innerHTML = "Cartelera de " + selectedValue2;

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
    else if(selectedValue2 == "Cine TerraMall") {
        moviesContainer.innerHTML = '';
        cinemaName.innerHTML = "Cartelera de " + selectedValue2;

        for (movie of MoviesTerramall) {
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

    
} 



