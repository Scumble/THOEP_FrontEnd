import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PatientsComponent } from './patients/patients.component';
import { PatientService } from '../services/patient.service';
import { routing } from './patients.routing';
import { ManagePatientsComponent } from './manage-patients/manage-patients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PatientsEncodedComponent } from './patients-encoded/patients-encoded.component';
import { SharedModule } from '../shared/modules/shared.module';
import { ManageHealthInfoComponent } from '../health-info/manage-health-info/manage-health-info.component';
import { HealthInfoEncodedComponent } from '../health-info/health-info-encoded/health-info-encoded.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HospitalsMapComponent } from '../hospitals-map/hospitals-map/hospitals-map.component';
import { AgmCoreModule } from '@agm/core';
import { DiseaseComponent } from '../disease/disease/disease.component';
import { DiseaseService } from '../services/disease.service';
import { ManageDiseasesComponent } from '../disease/manage-diseases/manage-diseases.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
     PatientsComponent,
     ManagePatientsComponent, 
     PatientsEncodedComponent,
     ManageHealthInfoComponent,
     HealthInfoEncodedComponent,
     HospitalsMapComponent,
     DiseaseComponent, 
     ManageDiseasesComponent
    ],
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ChartsModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCOJjvXVJjWfeM-wOlw2yeUp8FGiCd3PfI'
    }),
  ],
  providers: [PatientService,DiseaseService]
})
export class PatientsModule { }
