import { Component } from '@angular/core';
import { DirectoryService } from './services/directory.service';

import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any;
  user: any;
  dialogResult = "";

  constructor( private directory: DirectoryService, public dialog: MatDialog) {
   this.users = this.directory.getUsers();
  //  this.directory.getUsers().subscribe( response => console.log(response));
  }

  getUser(id) {
    // this.user = this.directory.getUser(id).subscribe( response => console.log(response));
   this.directory.getUser(id).subscribe(response => {
     this.user = response;
     this.openDialog();
    });

   }

   openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
      data: this.user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    })
  }

}
