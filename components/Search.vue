<template>
<div class="search">
    <div class="search-bar">
        <div class="search-bar__input-wrap">
            <input type="text" class="search-bar__input" v-on:input="onTermInput" />
        </div>
        <div class="search-bar__button-wrap">
            <button type="submit" class="search-bar__button">Туда</button>
        </div>
    </div>
    <div class="items">
        <div class="movie" v-for="item in items" v-bind:key="item.id">
            <div class="movie__title">
                <div class="movie__title-text">
                    {{ item.title }}
                </div>
                <div class="movie__title-poster">
                    <img v-bind:src="item.posterUrl" />
                </div>
            </div>
            <div class="movie__actors">
                <div class="movie__actors-title">Актеры:</div>
                <div class="movie-actor" v-for="actor in item.actors" v-bind:key="actor">
                    {{ actor }}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from "axios";
export default Vue.extend({
    data: () => {
        return {
            term: String,
            currentPage: 1,
            items: []
        }
    },
    methods: {
        onTermInput(event:any) {
            var url = new URL("http://localhost:3000/api/movies/search");
            url.searchParams.append("term", event.target.value);
            axios.get(url.toString()).then(resp => {
                this.items = resp.data;
            });
        }
    }
})
</script>

<style lang="scss">
.search-bar {
  display: flex;
  &__input-wrap {
    flex-grow: 1;
  }
  &__input {
    width: 100%;
    border-radius: 6px;
    border: 1px solid;
    font-size: 24px;
    padding-left: 15px;
    padding-right: 15px;
  }
  &__button {
    background: transparent;
    border: 1px solid orange;
    border-radius: 6px;
    height: 100%;
    padding: 0 20px 0 20px;
    margin-left: 10px;

    &:hover {
      background: orange;
      color: white;
    }
  }
}
.items {
    padding: 35px 0 15px 0;
}
.movie {
    margin-bottom: 20px;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    border: 1px solid;
    border-radius: 6px;
    &__title-text {
        text-align: left;
        font-size: 22px;
        font-weight: 500;
    }
    &__title-poster {
        margin-top: 15px;
    }
    &__title {

    }
    &__actors {

    }
    &__actors-title {
        font-weight: 500;
        font-size: 18px;
        text-align: right;
    }
}
</style>