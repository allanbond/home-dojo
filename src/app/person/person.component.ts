import { Component, OnInit } from '@angular/core';
import { StateService } from '../state/state.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public positiveBehaviors: Array<any>;
  public negativeBehaviors: Array<any>;
  
  constructor(private state: StateService) { }

  ngOnInit() {
    this.positiveBehaviors = this.state.getPositiveBehaviors();
    this.negativeBehaviors = this.state.getNegativeBehaviors();
  }

}