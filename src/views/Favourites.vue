<template>
  <div>
    <ul v-show="movies.length>0" class="divide-y divide-gray-200">
        <li v-for="movie in movies" :key="movie.imdbID" class="p-4" >
            <movie-card :movieData="movie" :showButton=false></movie-card>
        </li>
    </ul>
    <p v-show="movies.length===0">Your favourite list is empty</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MovieCard from '@/components/MovieCard.vue';
import store from '@/store/index'


export default defineComponent({
  name: "Favourites",
  components:{
      MovieCard,
  },
  setup() {   
    
    const movies = store.state.myfavs

    return {
      movies
    };
  }
});
</script>
