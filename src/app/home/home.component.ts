import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AddPersonComponent } from '../add-person/add-person.component'
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public people = [];

  constructor(public dialog: MdDialog, public state: StateService) {
    this.people = state.getPeople();
  }

  ngOnInit() {
  }

  addPerson = () => {
    let dialogRef = this.dialog.open(AddPersonComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.length > 0)
        this.state.addPerson({
          name: result,
          score: 0
        });
    });
  }
}
