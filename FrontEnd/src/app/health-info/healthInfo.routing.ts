import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ManageHealthInfoComponent } from './manage-health-info/manage-health-info.component';
import { HealthInfoEncodedComponent } from './health-info-encoded/health-info-encoded.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path:'addhealthInfo', component:ManageHealthInfoComponent,canActivate: [AuthGuard] },
  { path: 'updatehealthInfo/:healthInfoId', component: ManageHealthInfoComponent,canActivate: [AuthGuard] },
  { path:'healthInfoEncoded/:healthInfoId', component: HealthInfoEncodedComponent, canActivate: [AuthGuard]}
]);