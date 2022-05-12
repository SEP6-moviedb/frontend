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
  userId: string;
  commentId: number;
}
