import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// AngularFire
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';

// Modules
import { UsersModule } from './users/users.module';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Services
import { DirectoryService } from './services/directory.service';

// Components
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';






@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,

  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    UsersModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    DirectoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
