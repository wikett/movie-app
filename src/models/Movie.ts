export interface MovieInterface {
  imdbID: string;
  Title: string;
  Year: number;
  Fav: boolean
}

export class MovieDTO implements MovieInterface {
  imdbID = "";
  Title = "";
  Year = 0;
  Fav = false;
}

export default class Movie extends MovieDTO {
  constructor(dto: MovieDTO) {
    super();
    Object.assign(this, dto);
  }
}
