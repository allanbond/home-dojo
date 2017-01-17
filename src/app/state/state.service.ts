import { Injectable } from '@angular/core';

@Injectable()
export class StateService {

  public people: Array<any>;

  constructor() {
    this.people = [
      {
        name: 'David',
        score: 1234
      },
      {
        name: 'Alex',
        score: 1234
      },
      {
        name: 'Jacob',
        score: 1235
      },
      {
        name: 'Allan',
        score: 1236
      },
      {
        name: 'Sandra',
        score: 1231
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
}
