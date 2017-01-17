import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  public name: string;

  constructor(public dialogRef: MdDialogRef<AddPersonComponent>) { }

  ngOnInit() {
  }

  save = () => {
    this.dialogRef.close(this.name);
  }
}
