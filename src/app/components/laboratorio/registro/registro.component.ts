import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { LaboratorioService } from '../../../services/laboratorio.service';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  registroForm = new FormGroup({
    ncontrol: new FormControl(''),
    carrera: new FormControl(''),
    actividad: new FormControl(''),
    equipo: new FormControl(''),
    duracion: new FormControl(''),
    fecha: new FormControl( new Date().getTime() )
  });

  constructor( private router: Router, private afs: AngularFirestore, private srRegistro: LaboratorioService) { }

  ngOnInit(): void {
  }

  registro() {

    const uid = this.afs.createId();

    this.registroForm.value['uid'] = uid;

    this.srRegistro.asistenciaCrear(this.registroForm.value)
    .then( () => {
      Swal.fire({
        title: 'Guardado',
        text: 'Su registro se ha guardado',
        icon: 'success',
        showConfirmButton: false
      });
      this.router.navigateByUrl('asistencias');
    })
    .catch( (err) => {
      console.log('error');
    });

  }

}
