import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';

import { routing } from './app.routing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
/* App Root */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

/* Account Imports */
import { AccountModule } from './account/account.module';
/* Dashboard Imports */
import { DashboardModule } from './dashboard/dashboard.module';
import { UserModule } from './users/user.module';
import { ConfigService } from './shared/utils/config.service';
import { SharedModule } from './shared/modules/shared.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
    UserModule,
    SharedModule,
    BrowserModule,
    FormsModule,
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
  providers: [ConfigService, {
    provide: XHRBackend,
    useClass: AuthenticateXHRBackend
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }