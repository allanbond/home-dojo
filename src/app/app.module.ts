import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { ScoreComponent } from './score/score.component';
import { AddPersonComponent } from './add-person/add-person.component';

import { StateService } from './state/state.service';
import { PersonDialogComponent } from './person-dialog/person-dialog.component';
import { BehaviorsListComponent } from './behaviors-list/behaviors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScoreComponent,
    AddPersonComponent,
    PersonComponent,
    PersonDialogComponent,
    BehaviorsListComponent
  ],
  entryComponents: [AddPersonComponent, BehaviorsListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'person/:id', component: PersonComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]),
    MaterialModule.forRoot()
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
