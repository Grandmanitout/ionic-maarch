import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DocumentComponent } from '../pages/document/document.component';
import { RessourceComponent } from '../pages/ressource/ressource.component';
import { HomePage } from '../pages/home/home';
import { ListComponent } from '../pages/list/list.component';
import { NavbarComponent } from '../pages/navbar/navbar.component';
import { IniComponent } from '../pages/ini/ini.component';
import { LoginComponent } from '../pages/login/login.component';
import { CaptureComponent } from '../pages/capture/capture.component';
import { SearchComponent } from '../pages/search/search.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

@NgModule({
  declarations: [
    MyApp,
    RessourceComponent,
    HomePage,
    ListComponent,
    DocumentComponent,
    NavbarComponent,
    IniComponent,
    LoginComponent,
    CaptureComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ZXingScannerModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RessourceComponent,
    HomePage,
    ListComponent,
    DocumentComponent,
    IniComponent,
    LoginComponent,
    CaptureComponent,
    SearchComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
