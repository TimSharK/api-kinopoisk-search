async function search({ term }) {
    let url = `https://api.kinopoisk.cloud/movies/all/page/${this.currentPage}/token/26ae258e5b4382bd838cf3cf79c8a1dc`;
    //let items = (await require("axios").get(url.toString())).data;
    return [{
            title: "Гамильтон",
            actors: ["Хуй пойми кто", "Хуй пойми что"],
            posterUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/d1c00eed-5e79-4a6f-98bf-ba117ef4579c/300x450"
        },
        {
            title: "Гамильтон 2",
            actors: ["Хуй пойми чей внук", "Хуй пойми что за тип"],
            posterUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/16548b48-3fb7-44b0-a529-2279baefe255/300x450"
        }];
}
  
  export { search };