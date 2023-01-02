<script lang="ts">
import { defineComponent } from "vue";
import type { ShowThumbnail, Show } from "../types";
import { Genres } from "../types";
import GenreListingThumbnail from "./GenreListingThumbnail.vue";

interface GenreListingsData {
  genre: Genres;
  genreList: Genres[];
  shows: ShowThumbnail[];
  isLoading: boolean;
  error: boolean;
}

export default defineComponent({
  data(): GenreListingsData {
    return {
      shows: [],
      genre: Genres.DRAMA,
      genreList: [Genres.DRAMA, Genres.COMEDY, Genres.SPORTS],
      isLoading: true,
      error: false,
    };
  },
  components: {
    GenreListingThumbnail,
  },
  methods: {
    fetchShows() {
      this.isLoading = true;
      fetch(`https://api.tvmaze.com/search/shows?q=${this.genre}`)
        .then((res) => {
          return res.json();
        })
        .then((results) => {
          this.shows = results
            .map((result: { score: number; show: Show }) => result.show)
            .slice(0, 5);
          this.isLoading = false;
        })
        .catch((e) => {
          console.log(e);
          this.error = true;
        });
    },
    changeGenre(genre: Genres) {
      this.genre = genre;
      this.fetchShows();
    },
  },
  mounted() {
    this.fetchShows();
  },
});
</script>

<style scoped>
.genreListing {
  display: flex;
  flex-direction: column;
}

.genrePicker {
  display: flex;
  flex-direction: column;
}
.genreLinks {
  cursor: pointer;
  margin-bottom: 20px;
}

@media (min-width: 480px) {
  .genreListing {
    flex-direction: row;
  }
  .genrePicker {
    flex-direction: row;
    justify-content: space-between;
  }

  .genreLinks {
    display: flex;
    width: 300px;
    font-size: 40px;
    justify-content: space-around;
    align-self: center;
    margin-bottom: 0px;
  }
}
</style>

<template>
  <div>
    <div class="genrePicker">
      <h1>The genre you chose: {{ genre }}</h1>
      <div class="genreLinks">
        <div v-for="(item, index) in genreList" :key="index">
          <div @click="changeGenre(item)">{{ item }}</div>
        </div>
      </div>
    </div>

    <div v-if="isLoading">... Loading ...</div>
    <div v-if="error">Something went horribly wrong</div>
    <div class="genreListing">
      <GenreListingThumbnail
        v-for="show in shows"
        :key="show.id"
        :show="show"
      />
    </div>
  </div>
</template>
