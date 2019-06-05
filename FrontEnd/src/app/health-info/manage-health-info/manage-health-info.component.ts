import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HealthInfoService } from 'src/app/services/healthInfo.service';
import { Globals } from 'src/app/globals';
import { DiseaseService } from 'src/app/services/disease.service';

@Component({
    selector: 'app-manage-health-info',
    templateUrl: './manage-health-info.component.html',
    styleUrls: ['./manage-health-info.component.scss']
})
export class ManageHealthInfoComponent implements OnInit {
    healthInfoForm: FormGroup;
    diseaseList: any;
    title: string = "Create";
    healthInfoId: number;
    errorMessage: any;
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _healthInfoService: HealthInfoService, private _diseaseService:DiseaseService, private _router: Router, private _globals: Globals) {
        if (this._avRoute.snapshot.params['healthInfoId']) {
            this.healthInfoId = this._avRoute.snapshot.params['healthInfoId'];
        }
    }
    ngOnInit() {
        this.setDiseases();
        this.healthInfoForm = this._fb.group({
            id: 0,
            patientId: this._globals.patientId,
            diseaseCode: ['', Validators.required],
            heartRate: parseInt(this._globals.heartRate),
            bloodPressure: ['', Validators.required],
            temperature: ['', Validators.required],
            weight: ['', Validators.required]
        })
    }
    save() {
        if (!this.healthInfoForm.valid) {
            return;
        }
        if (this.title == "Create") {
            this._healthInfoService.addHealthInfo(this.healthInfoForm.value).subscribe(data => {
                this._router.navigate(['/healthInfo/' + this._globals.patientId]);
            }, error => this.errorMessage = error)};
    }

    setDiseases() {
        this._diseaseService.getDiseases().subscribe(data => {
            this.diseaseList = data;
        });
    }
    cancel() {
        this._router.navigate(['/healthInfo/'+ this._globals.patientId]);
    }

    get patientId() {
        return this.healthInfoForm.get('patientId');
    }
    get diseaseCode() {
        return this.healthInfoForm.get('diseaseCode');
    }
    get heartRate() {
        return this.healthInfoForm.get('heartRate');
    }
    get bloodPressure() {
        return this.healthInfoForm.get('bloodPressure');
    }
    get temperature() {
        return this.healthInfoForm.get('temperature');
    }
    get weight() {
        return this.healthInfoForm.get('weight');
    }
}
