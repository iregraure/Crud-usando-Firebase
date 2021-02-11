import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDataType, DialogTypes } from './tipoDialogo';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css']
})
export class DialogoComponent {

  public dialogTypeClass = DialogTypes;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogDataType) { }

}
