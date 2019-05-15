import { Component, OnInit } from '@angular/core';
import { IPatient } from '../models/patients.model';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {
  patients: IPatient[];
  constructor(private _patientService: PatientService) { }

  ngOnInit() {
    this.setPatients();
  }

  setPatients():void {
    this._patientService.getPatients().subscribe(data=> {
      this.patients = data;
    });
  }

  deletePatient(patientId: number) {  
    var ans = confirm("Do you want to delete patient with Id: " + patientId);  
    if (ans) {  
        this._patientService.deletePatient(patientId).subscribe((data) => {  
            this.setPatients();  
        }, error => console.error(error))  
    }
  }  
}