import { Component, OnInit, ContentChild } from '@angular/core';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @ContentChild(PersonComponent, { static: true }) set person(
    comp: PersonComponent
  ) {
    console.log('Person Component', comp);
  }

  constructor() {}

  ngOnInit() {}
}
