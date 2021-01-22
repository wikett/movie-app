import Axios from "axios";
import Movie, { MovieDTO } from "@/models/Movie";

interface RequestInterface {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: MovieDTO[];
}

export abstract class MoviesApi {
  private static moviesAxios = Axios.create();

  static async getAllMovies(page:number, query:string): Promise<RequestInterface> {
    const response = await this.moviesAxios.get<RequestInterface>(
      `https://jsonmock.hackerrank.com/api/movies/search/?page=${page}&Title=${query}`
    );
    response.data.data.map(movieDto => new Movie(movieDto))
    return response.data;
  }
  
}
