class Movie {
    constructor(vName, vYear, vDirector, vGenre, vDescription) {
        this.name = vName;
        this.year = vYear;
        this.director = vDirector;
        this.genre = vGenre;
        this.description = vDescription;
    }
}

// SELETORES

var btnRegister = document.querySelector("#btnCreate");
var btnList = document.querySelector("#btnMovies");

btnRegister.addEventListener("click", register)
btnList.addEventListener("click", list)
var movies = [];

function register() {
    let movieName = document.querySelector("#movieName").value;
    let movieYear = document.querySelector("#movieYear").value;
    let movieDirector = document.querySelector("#movieDirector").value;
    let movieGenre = document.querySelector("#movieGenre").value;
    let movieDescription = document.querySelector("#movieDescription").value;
    let registerMsg = document.querySelector("#registerAlert");

    movies.push(new Movie(movieName, movieYear, movieDirector, movieGenre, movieDescription));
    registerMsg.innerHTML = `<h5 class="success"> Movie registered!</h5>`
}

function list() {
    let answer = document.querySelector("#answer");

    answer.innerHTML = "";

    movies.forEach((eachMovie) => {
        answer.innerHTML += `<div class="movie" id="templateMovie">
        <h2 style="color: #df5c00;">${eachMovie.name}</h2>
        <p>Year: ${eachMovie.year}</p>
        <p>Directed by: ${eachMovie.director}</p>
        <p>Genre: ${eachMovie.genre}</p>
        <p>Movie Description: ${eachMovie.description}</p>
    <div>`
    });

}

