import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  constructor(
    private afs: AngularFirestore
  ) { }

  asistenciaCrear (record) {
    return this.afs.collection('Students').add(record);
  }

  asistencias() {
    return this.afs.collection('asistencias').snapshotChanges();
  }

}
