import { shallowMount } from "@vue/test-utils";
import MovieCard from "@/components/MovieCard.vue";
import Movie, { MovieDTO } from "@/models/Movie";

describe('MovieCard',() => {
    test('Show favourite button when the props data is true', () =>{
        const movieDTO = new MovieDTO()
        movieDTO.imdbID = "23kjrj"
        movieDTO.Title = "E.T."
        movieDTO.Year = 1983
        const testmovie = new Movie(movieDTO)
        const cmp = shallowMount(MovieCard,{
            propsData:{
                movieData: testmovie,
                showButton: true
            }
        })
        
        expect(cmp.find('button').isVisible()).toBe(true)
    })

    test('Hide favourite button when the props data is false', () =>{
        const movieDTO = new MovieDTO()
        movieDTO.imdbID = "23kjrj"
        movieDTO.Title = "E.T."
        movieDTO.Year = 1983
        const testmovie = new Movie(movieDTO)
        const cmp = shallowMount(MovieCard,{
            propsData:{
                movieData: testmovie,
                showButton: false
            }
        })
        
        expect(cmp.find('button').isVisible()).toBe(false)
    })
})

