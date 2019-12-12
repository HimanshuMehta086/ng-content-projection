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
  @ContentChild('h2', { static: true }) header: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    //  cannot query. undefined.
    console.log('ngAfterContentInit', this.header);
  }
}
