import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgBootstrapModule } from './modules/ng-bootstrap.module';
import { NgMaterialModule } from './modules/ng-material.module';
import { AppRoutingModule } from './modules/app-routing.module';
import { NavigationListComponent } from './components/navigation/navigation-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgBootstrapModule,
    NgMaterialModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
