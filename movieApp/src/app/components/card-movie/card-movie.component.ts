import { Component, Input, OnInit } from '@angular/core';
import { MovieInfClass } from 'src/app/class/movie-inf';
import { CardMovieService } from 'src/app/services/card-movie.service';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})

export class CardMovieComponent implements OnInit {

  @Input() movies: any[] = [];

  constructor(private  _cardMovieService: CardMovieService){}

  ngOnInit(): void {
    this._cardMovieService.getMovies().subscribe((res)=>{this.movies = res})
  }

}
