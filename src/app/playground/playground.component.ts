import {
  Component,
  OnInit,
  ContentChild,
  ContentChildren,
  QueryList
} from '@angular/core';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @ContentChildren(PersonComponent) set person(
    comp: QueryList<PersonComponent>
  ) {
    console.log('Person Components', comp);
  }

  constructor() {}

  ngOnInit() {}
}
