import { Component, OnInit, Input} from '@angular/core';
import { List } from 'src/app/class/list'


@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {

 @Input() list: List[] = [];

  constructor(){}

  ngOnInit(): void {

  }

}
