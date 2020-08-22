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
    // return this.afs.collection('Students').add(record);
    console.log(record);
    return this.afs.collection('asistencia').doc(record.uid).set(record, { merge: true });
  }

  asistencias() {
    return this.afs.collection('asistencia').snapshotChanges();
  }

}
