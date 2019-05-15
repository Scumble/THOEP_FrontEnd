import { Component, OnInit } from '@angular/core';
import { DiseaseService } from 'src/app/services/disease.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.scss']
})
export class DiseaseComponent implements OnInit {
  diseaseList: any;
  constructor(private _diseaseService: DiseaseService) { }

  ngOnInit() {
    this.setDiseases();
  }

  setDiseases() {
    this._diseaseService.getDiseases().subscribe(data=> {
      this.diseaseList = data;
    });
  }

  deleteDisease(diseaseId: number) {  
    var ans = confirm("Do you want to delete disease with Id: " + diseaseId);  
    if (ans) {  
        this._diseaseService.deleteDisease(diseaseId).subscribe((data) => {  
            this.setDiseases();  
        }, error => console.error(error))  
    }
  }  

}
