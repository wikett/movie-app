<template>
  <div>      
    <div class="relative pt-2 mx-auto text-gray-600">
    <input 
      type="text" 
      class="w-full h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
      v-model="query" 
      @change="searchByTitle()"
      
    >
    <button 
      type="text"
      class="absolute top-0 right-0 mt-5 mr-4"
      @change="searchByTitle()">
      <svg class="w-4 h-4 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
        viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
        width="512px" height="512px">
        <path
          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
      </svg>
    </button>
    <span 
      v-show="query.length>0"
      class="ml-2 text-sm text-right text-gray-400 cursor-pointer hover:text-blue-900"
      @click="cleanQuery()">
      Clear filter
    </span>
    </div>
    <p class="mt-10 text-right ">Total movies: <span class="font-bold">{{total}}</span></p>
    <ul class="mt-10 divide-y divide-gray-200">
        <li v-for="movie in movies" :key="movie.imdbID" class="p-4" >
            <movie-card :movieData="movie" :showButton=true></movie-card>
        </li>
    </ul>
    <nav
      v-show="movies.length>0"
      class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div class="hidden sm:block">
        <p class="text-sm text-gray-700">
          Current page
          <span class="font-medium">{{page}}</span>
          of
          <span class="font-medium">{{totalPages}}</span>
        </p>
      </div>
      <div class="flex justify-between flex-1 sm:justify-end">
          
        <a
          href="#"
          class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          @click.prevent="updateMovieList(-1)"
        >
          Previous
        </a>
        <button
          href="#"
          class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
          @click.prevent="updateMovieList(1)"
          :disabled="page===totalPages"
        >
          Next
        </button>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watchEffect } from 'vue';

import MovieCard from '@/components/MovieCard.vue';
import { MoviesApi } from '../api/MoviesApi';
import store from '@/store/index'


export default defineComponent({
  name: "MovieList",
  components:{
      MovieCard
  },
  async setup() {
    
    const result = await MoviesApi.getAllMovies(1, '')
    const movies = ref(result.data)
    const page = ref(1)
    const totalPages = ref(result.total_pages)
    const total = ref(result.total)

    const query = ''
    
    const favList = store.state.myfavs
    
    return {
      page, movies, favList, query, totalPages, total
    };
  },
  methods:{
      async updateMovieList(increment:number){
          if(this.page>0){
            this.page += increment
            this.page = this.page===0 ? 1 : this.page
          }
          
          const result =  await MoviesApi.getAllMovies(this.page, this.query)          
          this.movies = result.data
          this.total = result.total
          this.totalPages = result.total_pages
      },

      async searchByTitle(){
        this.page = 1
        const result = await MoviesApi.getAllMovies(this.page, this.query)
        this.movies = result.data
        this.total = result.total
        this.totalPages = result.total_pages
      },

      async cleanQuery(){
        this.query = ""
        this.searchByTitle()
      }
      
  }
});
</script>