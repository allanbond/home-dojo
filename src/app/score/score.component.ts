import { Component, Input, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { StateService } from '../state/state.service';
import { BehaviorsListComponent } from '../behaviors-list/behaviors-list.component';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

constructor(private dialog: MdDialog, private router: Router, private state: StateService) { }

@Input() score: number;

@Input() name: string;

@Input() img: string;

  ngOnInit() {
    console.log('name: ' + this.name);
    console.log('score: ' + this.score);
    console.log('img: ' + this.img);
  }

  addPoints() {
    let dialogRef = this.dialog.open(BehaviorsListComponent);
  }
}
