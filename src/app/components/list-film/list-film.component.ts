import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/interfaces/film';
import { AlertasService } from 'src/app/services/alertas.service';
import { FilmService } from 'src/app/services/film.service';
import { LoginService } from 'src/app/services/login.service';
import { DialogTypes } from '../dialogo/tipoDialogo';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent implements OnInit {

  films: Film[] = [];

  displayedColumns = ['position', 'originalTitle', 'spanishTitle', 'category', 'year', 'duration', 'modificar', 'eliminar'];
  
  constructor(private router: Router,
    private filmService: FilmService,
    private alertas: AlertasService,
    public loginService: LoginService) { }

  ngOnInit(): void 
  {
    this.filmService.obtenerPeliculas().subscribe(resul =>
      {
        this.films = resul;
      })
  }

  modificaPelicula(id: string)
  {
    this.router.navigate([`/filmUpdate/${id}`]);
  }

  eliminaPelicula(id: string, i: number)
  {
    this.alertas.dialogoConfirmacion('¿Seguro que quiere eliminar la película?').subscribe(op =>
      {
        if(op == DialogTypes.ACEPTAR)
        {
          this.films.splice(i, 1);
          this.filmService.borrarPelicula(id).subscribe();
          this.alertas.mostrarSnackBar("Se ha eliminado la película");
        }
      })
  }

}
