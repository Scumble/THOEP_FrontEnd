import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { PatientsComponent } from './patients/patients.component';
import { ManagePatientsComponent } from './manage-patients/manage-patients.component';
import { PatientsEncodedComponent } from './patients-encoded/patients-encoded.component';
import { HealthInfoComponent } from '../health-info/health-info/health-info.component';
import { ManageHealthInfoComponent } from '../health-info/manage-health-info/manage-health-info.component';
import { HealthInfoEncodedComponent } from '../health-info/health-info-encoded/health-info-encoded.component';
import { HospitalsMapComponent } from '../hospitals-map/hospitals-map/hospitals-map.component';
import { DiseaseComponent } from '../disease/disease/disease.component';
import { ManageDiseasesComponent } from '../disease/manage-diseases/manage-diseases.component';
import { HelathInfoStatisticsComponent } from '../health-info-statistics/helath-info-statistics/helath-info-statistics.component';
import { HeartRateComponent } from '../health-info/heart-rate/heart-rate.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'patients', component: PatientsComponent,canActivate: [AuthGuard]},
  { path: 'addPatient', component: ManagePatientsComponent, canActivate: [AuthGuard]},
  { path: 'updatePatient/:patientId', component: ManagePatientsComponent, canActivate: [AuthGuard]},
  { path: 'patientEncoded/:patientId', component: PatientsEncodedComponent, canActivate:[AuthGuard]},
  { path: 'healthInfo/:patientId', component: HealthInfoComponent,canActivate: [AuthGuard]},
  { path:'addhealthInfo', component:ManageHealthInfoComponent,canActivate: [AuthGuard] },
  { path: 'updatehealthInfo/:healthInfoId', component: ManageHealthInfoComponent,canActivate: [AuthGuard] },
  { path:'healthInfoEncoded/:healthInfoId', component: HealthInfoEncodedComponent, canActivate: [AuthGuard]},
  { path: 'hospitals/:patientId', component: HospitalsMapComponent},
  { path: 'diseases', component: DiseaseComponent, canActivate: [AuthGuard]},
  { path:'addDisease', component: ManageDiseasesComponent, canActivate: [AuthGuard]},
  { path:'updatedisease/:diseaseId',component: ManageDiseasesComponent, canActivate:[AuthGuard]},
  { path: 'healthStatistics/:patientId', component: HelathInfoStatisticsComponent},
  { path: 'heartRate', component: HeartRateComponent}
]);