import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';

import { UserComponent }    from './user/user.component';
import { AuthGuard } from '../auth.guard';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { path: 'users', component: UserComponent,canActivate: [AuthGuard]}
]);