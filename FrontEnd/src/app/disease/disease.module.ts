import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiseaseComponent } from './disease/disease.component';
import { DiseaseService } from '../services/disease.service';
import { ManageDiseasesComponent } from './manage-diseases/manage-diseases.component';

@NgModule({
  declarations: [DiseaseComponent, ManageDiseasesComponent],
  imports: [
    CommonModule
  ],
  providers:[DiseaseService]
})
export class DiseaseModule { }
