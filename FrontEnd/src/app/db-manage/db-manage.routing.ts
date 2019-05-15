import { ModuleWithProviders } from '@angular/core';
import { RouterModule }        from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { DbManageComponent } from './db-manage/db-manage.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
    { path: 'dbmanage', component: DbManageComponent, canActivate: [AuthGuard]}
]);