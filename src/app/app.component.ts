import { Component } from '@angular/core';
import { DirectoryService } from './services/directory.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any;

  constructor( private directory: DirectoryService) {
   this.users = this.directory.getUsers();
  }
}
