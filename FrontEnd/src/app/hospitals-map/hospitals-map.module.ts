import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HospitalsMapComponent } from './hospitals-map/hospitals-map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { PatientService } from '../services/patient.service';

@NgModule({
  declarations: [HospitalsMapComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: '',
      libraries: ["places"]
    }),
  ],
  providers: [PatientService]
})
export class HospitalsMapModule { }
