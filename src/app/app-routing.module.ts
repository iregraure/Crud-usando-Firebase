import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateFilmComponent } from './components/create-film/create-film.component';
import { ListFilmComponent } from './components/list-film/list-film.component';
import { UpdateFilmComponent } from './components/update-film/update-film.component';

const routes: Routes = [
  { path: '', redirectTo: '/filmList', pathMatch: 'full'},
  { path: 'filmList', component: ListFilmComponent },
  { path: 'filmCreate', component: CreateFilmComponent },
  { path: 'filmUpdate/:id', component: UpdateFilmComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
