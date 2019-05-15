import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';
import { routing } from './app.routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AccountModule } from './account/account.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './users/user.module';
import { SharedModule } from './shared/modules/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PatientsModule } from './patients/patients.module';
import { DbManageModule } from './db-manage/db-manage.module';
import { CommonModule } from '@angular/common';
import { HealthInfoStatisticsModule } from './health-info-statistics/health-info-statistics.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AccountModule,
    DashboardModule,
    HttpClientModule,
    DbManageModule,
    HealthInfoStatisticsModule,
    UserModule,
    CommonModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    PatientsModule,
    HttpModule,
    routing,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }