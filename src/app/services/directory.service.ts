import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';


@Injectable()
export class DirectoryService {

  constructor( private firestore: AngularFirestore) { }

  getUsers() {
    // return this.firestore.collection('users').valueChanges();
    const usersCollection = this.firestore.collection('users');
    return usersCollection.snapshotChanges().map( actions => {
      return actions.map( this.parserUser);
    });
    }

  getUser(id) {
   //  return // this.firestore.collection('users').snapshotChanges().;
    //doc(`${id}`).snapshotChanges().map( a => {
      // debugger;
    //   const data = a.payload.data;
    //    return { id, ...data };
    // });
    return this.firestore.doc(`users/${id}`).valueChanges().map( a => {
      //  debugger;
      // console.log(a);
       const data = a;
        return { id, ...data };
    });

  }

  parserUser(a)  {
    const data = a.payload.doc.data();
    const id = a.payload.doc.id;
// console.log(data);
// console.log(id);
    return { id, ...data };
  }
}


