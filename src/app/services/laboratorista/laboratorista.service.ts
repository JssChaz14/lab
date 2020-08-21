import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LaboratoristaService {

  constructor(
    private afs: AngularFirestore
  ) { }

  crearActividad(record) {
    return this.afs.collection('laboratorista').add(record);
  }

  actividades() {
    return this.afs.collection('laboratorista').snapshotChanges();
  }

  editarActividad( uid, record ) {
    this.afs.doc('laboratorista/' + uid).update(record);
  }

  eliminarActividad(uid) {
    this.afs.doc('laboratorista/' + uid).delete();
  }
}
