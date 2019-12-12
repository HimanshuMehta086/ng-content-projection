import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit
} from '@angular/core';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, AfterContentInit {
  @ContentChild(PersonComponent, { static: true }) person: PersonComponent;

  constructor() {
    console.log('constructor', this.person);
  }

  ngOnInit() {
    //  available only if {static: true}
    console.log('ngOnInit', this.person);
  }

  ngAfterContentInit(): void {
    //  correct way
    console.log('ngAfterContentInit', this.person);
  }
}
