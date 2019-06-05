import { Injectable } from '@angular/core';

@Injectable()
export class Globals {
  patientId: number;
  isAdmin: boolean;
  isSysAdmin: boolean;
  heartRate: any;
}