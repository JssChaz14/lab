import { Component, OnInit } from '@angular/core';

import { MaestrosService } from '../../../services/maestros/maestros.service';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-maestros',
  templateUrl: './maestros.component.html',
  styleUrls: ['./maestros.component.css']
})
export class MaestrosComponent implements OnInit {

  asistencias: Observable<any[]>;

  constructor(private readonly afs: AngularFirestore, private serviceLaboratorio: MaestrosService) {

    this.asistencias = this.serviceLaboratorio.maestrosVer().pipe(
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
