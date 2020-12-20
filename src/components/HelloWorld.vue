<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button type="button" v-on:click="onNextPage">Next page</button>
    <div v-for="item in items" v-bind:key="item.id">
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    return {
      page: 1,
      items: []
    };
  },
  methods: {
    onNextPage: function() {
      var self = this;
      var newPage = self.page + 1;
      const url = `https://api.kinopoisk.cloud/movies/all/page/${newPage}/token/26ae258e5b4382bd838cf3cf79c8a1dc`;
      fetch(url)
      .then((resp) => resp.json()
        .then((json => {
          self.page = self.page + 1;
          self.items = json.movies;
        })));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-input {
  font-size: 15pt;
  padding: 4pt 10pt;
  font-family: "Calibri";
  border-radius: 4px;
  border: 1px solid #a5a5a5;
  color: #555555;
  width: 20%;
}
</style>
