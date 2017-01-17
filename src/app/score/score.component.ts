import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor() { }

@Input() score: number;

@Input() name: string;

  ngOnInit() {
    console.log('name: ' + this.name);
    console.log('score: ' + this.score);
  }

}
