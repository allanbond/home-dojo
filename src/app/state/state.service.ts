import { Injectable } from '@angular/core';

@Injectable()
export class StateService {

  public people: Array<any>;
  public selectedPerson: any;
  public positiveBehaviors: Array<any>;
  public negativeBehaviors: Array<any>;

  constructor() {
    this.people = [
      {
        name: 'David',
        score: 65,
        img: './assets/david.jpg'
      },
      {
        name: 'Alex',
        score: 73,
        img: './assets/alex2.jpg'
      },
      {
        name: 'Jacob',
        score: 24,
        img: './assets/jakey.jpg'
      }
    ];

    this.positiveBehaviors = [
      {
        label: 'Made Bed',
        points: 1
      }
    ];

    this.negativeBehaviors = [
      {
        label: 'Mean to Siblings',
        points: 2
      }
    ];
  }

  addPerson(person) {
    this.people.push(person);
  }

  getPerson(name) {
    let match = null;
    this.people.forEach((person) => {
      if (person.name === name) {
        match = person;
      }
    })

    return match;
  }

  getPeople() {
    return this.people;
  }

  selectPerson(person) {
    this.selectedPerson = person;
  }

  getSelectedPerson() {
    return this.selectedPerson;
  }

  addPositiveBehavior(behavior) {
    this.positiveBehaviors.push(behavior);
  }

  getPositiveBehaviors() {
    return this.positiveBehaviors;
  }

  addNegativeBehavior(behavior: any) {
    this.negativeBehaviors.push(behavior)
  }

  getNegativeBehaviors() {
    return this.negativeBehaviors;
  }
}
