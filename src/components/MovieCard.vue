<template>
  <div class="flex flex-wrap">
    <div class="flex flex-wrap w-full md:w-4/5">
      <p class="w-full"><span class="font-bold">Title: </span>{{ movieData.Title }}</p>
      <p class="w-full"><span class="font-bold">Id: </span>{{ movieData.imdbID }}</p>
      <p class="w-full"><span class="font-bold">Year: </span>{{ movieData.Year }}</p>
    </div>
    <div class="flex flex-wrap w-full mt-3 md:w-1/5">
      <button 
        v-show="showButton"        
        @click="saveFavourite()"
        class="inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-red-200 rounded hover:bg-gray-400">
        
        
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span >Favourite</span>
      </button>
      <button v-show="!showButton"  @click="removeFavourite()" class="inline-flex items-center px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
        
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 fill-current" >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      
        <span >Remove</span>
      </button>
      <span v-if="showError" class="text-xs text-gray-500">This movie is already in your favourites</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: "MovieCard",
  props: {
    movieData:{
      type: Object,
      required: true
    },
    showButton:{
      type: Boolean,
      required: true
    }
  },
  setup(){
    const store = useStore()
    const showError = ref(false)
    return {store, showError}
  },
  methods:{
    saveFavourite(){
      const found = this.store.state.myfavs.filter((item: { imdbID: string; }) => item.imdbID===this.movieData.imdbID)      
      if(found.length===0){
        this.showError = false;
        this.store.commit("addFav", this.movieData)
      }
      else{
        this.showError = true;
      } 
    },
    removeFavourite(){
      this.store.commit("removeFav", this.movieData)
    }
  }
});
</script>
