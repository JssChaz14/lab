import { Component, OnInit } from '@angular/core';

import { LaboratorioService } from '../../../services/laboratorio.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})

export class AsistenciaComponent implements OnInit {

  asistencias: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore, private serviceLaboratorio: LaboratorioService) {

    this.asistencias = this.serviceLaboratorio.asistencias().pipe(
        map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  ngOnInit(): void {
  }

}
