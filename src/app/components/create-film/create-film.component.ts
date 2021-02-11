import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Film } from 'src/app/interfaces/film';
import { AlertasService } from 'src/app/services/alertas.service';
import { FilmService } from 'src/app/services/film.service';
import { DialogTypes } from '../dialogo/tipoDialogo';

@Component({
  selector: 'app-create-film',
  templateUrl: './create-film.component.html',
  styleUrls: ['./create-film.component.css']
})
export class CreateFilmComponent implements OnInit {

  createForm: FormGroup;
  film: Film;
  
  constructor(private router: Router,
              private filmService: FilmService,
              private alertas: AlertasService) { }

  ngOnInit(): void 
  {
    this.createForm = new FormGroup(
      {
        originalTitle: new FormControl('', [Validators.required]),
        spanishTitle: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),
        year: new FormControl('', [Validators.required]),
        duration: new FormControl('', [Validators.required])
      }
    );
  }

  crearPelicula()
  {
    this.film = {id: null,
                originalTitle: this.createForm.controls.originalTitle.value,
                spanishTitle: this.createForm.controls.spanishTitle.value,
                category: this.createForm.controls.category.value,
                year: this.createForm.controls.year.value,
                duration: this.createForm.controls.duration.value};

    this.filmService.crearPelicula(this.film).subscribe(resul => 
      {
        this.alertas.mostrarSnackBar("Se ha creado la película");
        this.router.navigate(['/filmList']);
      })
  }

  cancelar()
  {
    this.alertas.dialogoConfirmacion('¿Seguro que quiere cancelar?').subscribe(op =>
      {
        if(op == DialogTypes.ACEPTAR)
        {
          this.router.navigate(['/filmList']);
        }
      })
  }

}
