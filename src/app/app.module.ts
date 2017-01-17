import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ScoreComponent } from './score/score.component';
import { AddPersonComponent } from './add-person/add-person.component';

import { StateService } from './state/state.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScoreComponent,
    AddPersonComponent
  ],
  entryComponents: [AddPersonComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]),
    MaterialModule.forRoot()
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
