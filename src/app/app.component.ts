import { Component } from '@angular/core';
import { DirectoryService } from './services/directory.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any;
  user: any;

  constructor( private directory: DirectoryService) {
   this.users = this.directory.getUsers();
  //  this.directory.getUsers().subscribe( response => console.log(response));
  }

  getUser(id) {
    // this.user = this.directory.getUser(id).subscribe( response => console.log(response));
   this.directory.getUser(id).subscribe(response => this.user = response);
   }

}
