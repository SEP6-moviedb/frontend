export interface StatisticsByActor {
  actorId: number;
  actorName: string;
  voteAverage: number;
  popularity: number;
}

export interface StatisticsByMovie {
  movieId: string;
  movieName: string;
  movieUserRatingAvg: number;
}

