import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './core/components/home/home.component';
import { LoginComponent } from './core/components/login/login.component';
import {SharedModule} from "./shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import { RegisterComponent } from './core/components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
