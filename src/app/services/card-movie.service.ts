import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/app/environments/enviroments';
import { MovieInfClass } from 'src/app/class/movie-inf';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardMovieService {

  constructor(private _httpClient: HttpClient) { }

  public getMovies(): Observable<MovieInfClass[]>{
    return this._httpClient.get<MovieInfClass[]>(`${API_PATH}/movies`)
  }
}
