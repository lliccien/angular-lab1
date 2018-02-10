import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatListModule,
  MatButtonModule

} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],

})
export class MaterialModule { }
