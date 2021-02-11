import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../interfaces/film';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  url = "https://rentalshopjacaranda-default-rtdb.europe-west1.firebasedatabase.app";

  constructor(private http: HttpClient) { }

  crearPelicula(film: Film)
  {
    return this.http.post(`${this.url}/peliculas.json`, film).pipe(map((resul: any) =>
    {
      film.id = resul.name;
    }));
  }

  actualizarPelicula(film: Film)
  {
    const filmTemp = 
    {
      ...film
    };
    delete filmTemp.id;
    return this.http.put(`${this.url}/peliculas/${film.id}.json`, filmTemp); 
  }

  obtenerPeliculas()
  {
    return this.http.get(`${this.url}/peliculas.json`).pipe(map(resul => this.formatearPeliculas(resul)));
  }

  obtenerPelicula(id: string)
  {
    return this.http.get(`${this.url}/peliculas/${id}.json`);
  }

  private formatearPeliculas( filmObj: object)
  {
    const films: Film[] = [];
    
    if ( filmObj !== null )
    {
      Object.keys(filmObj).forEach(key => 
        {
          const film: Film = filmObj[key];
          film.id = key;
          films.push(film);
        })
    }
    return films;
  }

  borrarPelicula(id: string)
  {
    return this.http.delete(`${this.url}/peliculas/${id}.json`);
  }

}
