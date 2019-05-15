import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patients-encoded',
  templateUrl: './patients-encoded.component.html',
  styleUrls: ['./patients-encoded.component.scss']
})
export class PatientsEncodedComponent implements OnInit {

  patientEncoded: string;
  patientId: number;
  constructor(private _patientService: PatientService, private _avRoute: ActivatedRoute) { }

  ngOnInit() {
    if (this._avRoute.snapshot.params['patientId']) {  
      this.patientId = this._avRoute.snapshot.params['patientId'];  
    }  
    this.setEncodedPatientById(this.patientId);
  }

  setEncodedPatientById(patientId: number) {
    this._patientService.getEncodedPatientById(patientId).subscribe(data => {
      this.patientEncoded = data;
    });
  }
}
