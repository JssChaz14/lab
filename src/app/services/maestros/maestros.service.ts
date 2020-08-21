import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MaestrosService {

  constructor(
    private afs: AngularFirestore
  ) { }

  maestroAgregar (record) {
    return this.afs.collection('maestros').add(record);
  }

  maestrosVer() {
    return this.afs.collection('maestros').snapshotChanges();
  }
}
