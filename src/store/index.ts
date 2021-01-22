import { createStore } from "vuex";
import Movie from '@/models/Movie';


const store = createStore({
  state: {
    myfavs: []
  },
  mutations: {
    addFav(state:any, movie:Movie){
      state.myfavs.push(movie)
    },
    removeFav(state:any, movie:Movie){      
      const index = state.myfavs.findIndex((item: { imdbID: string; }) => item.imdbID == movie.imdbID)
      state.myfavs.splice(index, 1)
    }
  },
  actions: {},
  modules: {}
});
export default store
