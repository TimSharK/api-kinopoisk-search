import axios from "axios";

async function search({ term, page }) {
    if (term == null)
        return {
            items: [],
            maxPages: 1
        };

    let movies = [];
    let maxPages = 1;
    let currentPage = 1;

    while(true) {
        if (currentPage == maxPages)
            break;

        let url = `https://api.kinopoisk.cloud/movies/all/page/${page}/token/26ae258e5b4382bd838cf3cf79c8a1dc`;
        let response = (await axios.get(url.toString()));

        if (response.status !== 200)
            return response.data;

        let pageMovies = response.data.movies.filter(movie => {
            return movie.title.toLowerCase().indexOf(term.toLowerCase()) != -1;
        })

        movies.push(pageMovies);

        maxPages = response.data.maxPages;
        currentPage++;
    }

    return {
        items: movies,
        maxPages: maxPages
    };
}
  
export { search };