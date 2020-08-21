import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {

  actividades: Observable<any[]>;

  constructor(private afs: AngularFirestore) {
    this.actividades = afs.collection('asistencias').valueChanges();
  }

  ngOnInit(): void {
  }

}
