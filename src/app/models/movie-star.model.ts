export class Movie {
  date?: any;
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

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

export interface Crew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}

export interface Credits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

  export class actors {
    birthday?: string;
    known_for_department!: string;
    deathday?: any;
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
    homepage?: any;
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

  export interface searchActor {
    profile_path: string;
    adult: boolean;
    id: number;
    known_for: KnownFor[];
    name: string;
    popularity: number;
  }




