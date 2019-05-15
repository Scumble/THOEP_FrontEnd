import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-manage-patients',
  templateUrl: './manage-patients.component.html',
  styleUrls: ['./manage-patients.component.scss']
})
export class ManagePatientsComponent implements OnInit {
    patientForm: FormGroup;  
    title: string = "Create";  
    patientId: number;  
    errorMessage: any;  
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _patientService: PatientService, private _router: Router) {  
        if (this._avRoute.snapshot.params['patientId']) {  
            this.patientId = this._avRoute.snapshot.params['patientId'];  
        }  
    }  
    ngOnInit() { 
        let dp = new DatePipe('en-Us');
        let p = 'y-MM-dd';
      this.patientForm = this._fb.group({  
        id: 0,  
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        address: ['', Validators.required],
        gender: ['', Validators.required],
        birthDate: ['', Validators.required]
        })   
        if (this.patientId > 0) {  
            this.title = "Edit";  
            this._patientService.getPatientById(this.patientId).subscribe(resp => this.patientForm.patchValue({
                id: this.patientId,
                firstName: resp['firstName'],
                lastName: resp['lastName'],
                address: resp['address'],
                birthDate: dp.transform(resp['birthDate'],p),
                gender: resp['gender']
            }), error => this.errorMessage = error);  
        }  
    }  
    save() {  
        if (!this.patientForm.valid) {  
            return;  
        }  
        if (this.title == "Create") {  
            this._patientService.addPatient(this.patientForm.value).subscribe(data => {  
                this._router.navigate(['/patients']);  
            }, error => this.errorMessage = error)  
        } else if (this.title == "Edit") {  
            this._patientService.updatePatient(this.patientForm.value).subscribe(data => {  
                this._router.navigate(['/patients']);  
            }, error => this.errorMessage = error)  
        }  
    }  
    cancel() {  
        this._router.navigate(['/patients']);  
    }
    
    get firstName() {  
        return this.patientForm.get('firstName');  
    }  
    get lastName() {  
        return this.patientForm.get('lastName');  
    }  
    get address() {  
        return this.patientForm.get('address');  
    }  
    get age() {  
        return this.patientForm.get('age');  
    }  
    get gender() {
        return this.patientForm.get('gender');  
    }
    get birthDate() {
        return this.patientForm.get('birthdate');  
    }
}
