import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Paginas/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { MoviesComponent } from './Paginas/movies/movies.component';
import { LoginComponent } from './Paginas/login/login.component';
import { FormsComponent } from './components/forms/forms.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MoviesComponent,
    LoginComponent,
    FormsComponent,
    CardMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
