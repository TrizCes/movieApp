import { Component, Input, OnInit } from '@angular/core';
import { MovieInfClass } from 'src/app/class/movie-inf';


@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss']
})

export class CardMovieComponent implements OnInit {

  @Input() movies: MovieInfClass[] = [];

  constructor(){}

  ngOnInit(): void {
  }

}
