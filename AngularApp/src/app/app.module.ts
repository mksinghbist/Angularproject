import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { Routes, RouterModule } from '@angular/router';
/*(export const routes: Routes = [
  {
    path: 'dropdown',
    component: DropdownComponent
  }];*/
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
	//RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
