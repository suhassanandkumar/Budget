import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { HomeComponent } from '../home/home.component';
import { DialogData } from '../models/userDetails';


@Component({
    selector: 'modal-box',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
  })

export class DialogModal {  
  constructor(
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
