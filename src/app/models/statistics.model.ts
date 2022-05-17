//export class Statistics {
  //avgMovieRatingsByActor?: {[actorid:string]:[avgRating:number]};
  export class AvgMovieRatingsByActor {
    key?: string;
    value?: number;
  }

  //export interface RootObject {
  export class Statistics {
    avgMovieRatingsByActor?: AvgMovieRatingsByActor[];
}


//}
