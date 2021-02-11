import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { DialogoComponent } from '../components/dialogo/dialogo.component';
import { DialogTypes } from '../components/dialogo/tipoDialogo';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  dialogConfig = new MatDialogConfig();

  constructor(private dialog: MatDialog,
    private snackBar: MatSnackBar) 
  { 
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
  }

  cerrarDialogo()
  {
    this.dialog.closeAll();
  }

  dialogCargando()
  {
    this.cerrarDialogo();
    this.dialogConfig.data =
    {
      tipoDialogo: DialogTypes.ESPERANDO
    }
    this.dialog.open(DialogoComponent, this.dialogConfig)
  }

  dialogError(textoError: string)
  {
    this.cerrarDialogo();
    this.dialogConfig.data =
    {
      tipoDialogo: DialogTypes.ERROR,
      texto: textoError
    };
    this.dialog.open(DialogoComponent, this.dialogConfig);
  }

  dialogInfo(textoInfo: string): Observable<number>
  {
    this.cerrarDialogo();
    this.dialogConfig.data = 
    {
      tipoDialogo: DialogTypes.INFORMACION,
      texto: textoInfo
    };
    const dialogoRef = this.dialog.open(DialogoComponent, this.dialogConfig);
    return dialogoRef.afterClosed();
  }

  dialogoConfirmacion(textoConf: string): Observable<number>
  {
    this.cerrarDialogo();
    this.dialogConfig.data = 
    {
      tipoDialogo: DialogTypes.CONFIRMACION,
      texto: textoConf
    };
    const dialogoRef = this.dialog.open(DialogoComponent, this.dialogConfig);
    return dialogoRef.afterClosed();
  }

  mostrarSnackBar(mensajeAMostrar: string)
  {
    this.snackBar.open(mensajeAMostrar, null,
      {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
  }

}
