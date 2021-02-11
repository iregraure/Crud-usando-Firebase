import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/interfaces/film';
import { AlertasService } from 'src/app/services/alertas.service';
import { FilmService } from 'src/app/services/film.service';
import { DialogTypes } from '../dialogo/tipoDialogo';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styleUrls: ['./update-film.component.css']
})
export class UpdateFilmComponent implements OnInit {

  updateForm: FormGroup;
  film: Film;

  constructor(private router: Router,
    private filmService: FilmService,
    private route: ActivatedRoute,
    private alertas: AlertasService) { }

  ngOnInit(): void 
  {
    const id = this.route.snapshot.paramMap.get('id');

    this.cargarDatosFPelicula(id);

    this.updateForm = new FormGroup(
      {
        originalTitle: new FormControl('', [Validators.required]),
        spanishTitle: new FormControl('', [Validators.required]),
        category: new FormControl('', [Validators.required]),
        year: new FormControl('', [Validators.required]),
        duration: new FormControl('', [Validators.required])
      }
    );
  }

  cargarDatosFPelicula(id: string)
  {
    this.filmService.obtenerPelicula(id).subscribe((resul: Film) =>
    {
      this.film = resul;
      this.updateForm.controls.originalTitle.setValue(this.film.originalTitle);
      this.updateForm.controls.spanishTitle.setValue(this.film.spanishTitle);
      this.updateForm.controls.category.setValue(this.film.category);
      this.updateForm.controls.duration.setValue(this.film.duration);
      this.updateForm.controls.year.setValue(this.film.year);
    })
  }

  actualizaPelicula()
  {
    this.film = {id: this.route.snapshot.paramMap.get('id'),
      originalTitle: this.updateForm.controls.originalTitle.value,
      spanishTitle: this.updateForm.controls.spanishTitle.value,
      category: this.updateForm.controls.category.value,
      year: this.updateForm.controls.year.value,
      duration: this.updateForm.controls.duration.value};
    this.filmService.actualizarPelicula(this.film).subscribe(resul => 
      {
        this.alertas.mostrarSnackBar("Se ha actualizado la película");
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
