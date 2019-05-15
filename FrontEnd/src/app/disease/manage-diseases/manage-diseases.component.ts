import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiseaseService } from 'src/app/services/disease.service';

@Component({
  selector: 'app-manage-diseases',
  templateUrl: './manage-diseases.component.html',
  styleUrls: ['./manage-diseases.component.scss']
})
export class ManageDiseasesComponent implements OnInit {
    diseaseForm: FormGroup;  
    title: string = "Create";  
    diseaseId: number;
    errorMessage: any;  
    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute, private _diseaseService: DiseaseService, private _router: Router) {  
        if (this._avRoute.snapshot.params['diseaseId']) {  
            this.diseaseId = this._avRoute.snapshot.params['diseaseId'];  
        }  
    }  
    ngOnInit() { 
      this.diseaseForm = this._fb.group({  
        id: 0,  
        diseaseCode: ['', Validators.required],
        diseaseName: ['', Validators.required],
        dangerLevel: ['', Validators.required],
        recommendation: ['', Validators.required]
        })   
        if (this.diseaseId > 0) {  
            this.title = "Edit";  
            this._diseaseService.getDiseaseById(this.diseaseId).subscribe(resp => this.diseaseForm.patchValue({
                id: this.diseaseId,
                diseaseCode: resp['diseaseCode'],
                diseaseName: resp['diseaseName'],
                dangerLevel: resp['dangerLevel'],
                recommendation: resp['recommendation']
            }), error => this.errorMessage = error);  
        }  
    }  
    save() {  
        if (!this.diseaseForm.valid) {  
            return;  
        }  
        if (this.title == "Create") {  
            this._diseaseService.addDisease(this.diseaseForm.value).subscribe(data => {  
                this._router.navigate(['/diseases']);  
            }, error => this.errorMessage = error)  
        } else if (this.title == "Edit") {  
            this._diseaseService.updateDisease(this.diseaseForm.value).subscribe(data => {  
                this._router.navigate(['/diseases']);  
            }, error => this.errorMessage = error)  
        }  
    }  
    cancel() {  
        this._router.navigate(['/diseases']);  
    }

        
    get diseaseCode() {  
      return this.diseaseForm.get('diseaseCode');  
    }  

    get diseaseName() {
      return this.diseaseForm.get('diseaseName');
    }

    get dangerLevel() {
      return this.diseaseForm.get('dangerLevel');
    }

    get recommendation() {
      return this.diseaseForm.get('recommendation')
    }
}
