import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { FullComponent } from './layouts/full/full.component';
import  { LoginGuard } from 'src/app/services/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'', component: FullComponent, canActivate: [LoginGuard], children: [
    {path: 'home', component:HomeComponent},
    {path: 'movies', component:MoviesComponent},
  ]},
  {path:'login', component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
