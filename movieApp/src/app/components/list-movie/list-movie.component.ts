import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_GENRES } from 'src/app/environments/enviroments';
import { List } from 'src/app/class/list'

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent {
  constructor(private _httpClient: HttpClient) { }

  public getGenres(): Observable<List[]>{
    return this._httpClient.get<List[]>(API_GENRES)
  }
}
