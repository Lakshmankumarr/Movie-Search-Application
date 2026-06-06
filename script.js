const apiKey = "6b8c1a1c";

const movieInput =
document.getElementById("movieInput");

const searchBtn =
document.getElementById("searchBtn");

const moviesContainer =
document.getElementById("moviesContainer");

searchBtn.addEventListener(
"click",
async () => {

const movie =
movieInput.value.trim();

if(movie === "")
{
alert("Please enter a movie");
return;
}

try
{
const response =
await fetch(
`https://www.omdbapi.com/?apikey=${apiKey}&s=${movie}`
);

const data =
await response.json();

if(data.Response === "False")
{
moviesContainer.innerHTML =
"<p style='color:white'>Movie not found</p>";
return;
}

moviesContainer.innerHTML = "";

data.Search.forEach(movie => {

const card =
document.createElement("div");

card.classList.add("movie-card");

card.innerHTML = `
<img
src="${movie.Poster}"
alt="${movie.Title}"
>

<h3>${movie.Title}</h3>

<p>${movie.Year}</p>

<p>${movie.Type}</p>
`;

moviesContainer.appendChild(card);

});

}
catch(error)
{
moviesContainer.innerHTML =
"<p style='color:white'>Error loading movies</p>";
}

});