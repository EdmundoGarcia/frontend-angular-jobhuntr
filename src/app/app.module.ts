import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationListComponent } from './components/application-list/application-list.component';
import { FormsModule } from '@angular/forms';
import { ApplicationModalComponent } from './components/application-modal/application-modal.component';


@NgModule({
  declarations: [AppComponent, ApplicationListComponent, ApplicationModalComponent, ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
