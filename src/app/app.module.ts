import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { LoginModule } from './login/login.module';
import { MainService } from './main.service';

@NgModule({
  declarations: [AppComponent, CoursesComponent],
  imports: [BrowserModule, AppRoutingModule, LoginModule],
  providers: [MainService],
  bootstrap: [AppComponent],
})
export class AppModule {}
