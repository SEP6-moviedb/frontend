export class Movie {
  date?: any;
  temperatureC?: any;
  summary?: any;
}

export class tmdbMovie {
  poster_path!: string;
  video?: boolean;
  vote_average!: number;
  overview?: string;
  release_date!: string;
  vote_count?: number;
  adult?: boolean;
  backdrop_path!:string;
  title!: string;
  name!: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  popularity?: number;
  media_type?: string;
  stars!: number;
}

export interface comment {
  movieId: string;
  comment: string;
  username: string;
  commentId: number;
}

export class tmdbActor {
  birthday?: string;
  known_for_department!: string[];
  deathday?: string;
  id!: number;
  name!: string;
  also_known_as!: string[];
  gender!: number;
  biography!: string;
  popularity!: number;
  place_of_birth?: string;
  profile_path?: string;
  adult!: boolean;
  imdb_id!: string;
  homepage?: string;
}




  export interface KnownFor {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  original_title: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  first_air_date: string;
  origin_country: string[];
  name: string;
  original_name: string;
}

export interface Result {
  profile_path: string;
  adult: boolean;
  id: number;
  known_for: KnownFor[];
  name: string;
  popularity: number;
}

export interface popularActor {
  page: number;
  results: Result[];
  total_results: number;
  total_pages: number;
}



