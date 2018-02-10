import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class DirectoryService {

  constructor( private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection('users').valueChanges();
    }

}


