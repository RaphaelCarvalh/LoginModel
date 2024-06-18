import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AuthGuard } from './services/shared/auth.guard';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccordionModule } from "primeng/accordion";
import { AuthserviceService } from './services/shared/authservice.service';

import { menuDoisComponent } from './component/menuDois/menuDois.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  
    menuDoisComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AccordionModule,
    FormsModule,

    
  ],
  providers: [
    AuthGuard,
    AuthserviceService,
  ],

  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }


