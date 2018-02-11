import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatDialogModule


} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatDialogModule
  ],

})
export class MaterialModule { }
