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

// Services
import { DirectoryService } from './services/directory.service';

// Components
import { AppComponent } from './app.component';






@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    UsersModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    MaterialModule
  ],
  providers: [
    DirectoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
