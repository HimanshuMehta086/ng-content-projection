import {
  Component,
  OnInit,
  ContentChild,
  AfterContentInit,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit, AfterContentInit {
  //  ContentChild cannot randomly query the DOM elements in content projected
  //  ContentChild can query components nevertheless

  //  From documentation:
  //  ContentChild does not retrieve elements or directives
  //  that are in other components' templates,
  //  since a component's template is always a
  //  black box to its ancestors.

  @ContentChild('h2', { static: true }) header: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    //  cannot query. undefined.
    console.log('ngAfterContentInit', this.header);
  }
}
