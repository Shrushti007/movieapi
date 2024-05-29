window.onload = () => {
  //  1 step
  let xhr = new XMLHttpRequest();

  // 2 step
  xhr.open(
    "GET",
    "https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1"
  );

  // 3 step
  xhr.send();

  // 4 step
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const movies = JSON.parse(xhr.responseText);
        // console.log(movies);
        movies.results.forEach((movie) => {
          console.log(movie);
          console.log(movie.title);
          console.log(movie.vote_average);
          console.log(movie.poster_path);
            let divTag = document.createElement("div");
            divTag.className = "col-xl-3";
            let imgTag = document.createElement("img");
            imgTag.className = "img-fluid";
          let h4Tag = document.createElement("h4");
            let pTag = document.createElement("p");
            imgTag.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            h4Tag.innerText = movie.title;
            pTag.innerText = `Rating: ${movie.vote_average}`;
            divTag.append(imgTag);
            divTag.append(h4Tag);
            divTag.append(pTag);

            document.querySelector('.row').append(divTag);
        });
      } else {
        console.log("Error: " + xhr.status);
      }
    }
  };
};

const handleSearch = (event) => {
  event.preventDefault();
  let title = document.querySelector('.searchBox').value;
  window.location.href = `search.html?query=${title}`;

};

// document.querySelector('.btn').addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("adfasdf");
// })