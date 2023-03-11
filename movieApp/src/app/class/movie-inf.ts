export class MovieInfClass {
  Title!: string;
  Year!: string;
  Runtime!: string;
  Poster!: string;

  constructor(title: string, year: string, runtime: string, poster: string) {
    this.Title = title;
    this.Year = year;
    this.Runtime = runtime;
    this.Poster = poster;
  }
}
