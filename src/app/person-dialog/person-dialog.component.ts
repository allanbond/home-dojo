import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-person-dialog',
  templateUrl: './person-dialog.component.html',
  styleUrls: ['./person-dialog.component.scss']
})
export class PersonDialogComponent implements OnInit {
  public person;

  constructor(private state: StateService) { }

  ngOnInit() {
    this.person = this.state.getSelectedPerson();
  }

}
