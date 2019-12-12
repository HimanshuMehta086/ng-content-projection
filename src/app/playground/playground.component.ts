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
  @ContentChild('header', { static: true }) header: ElementRef;

  constructor() {}

  ngOnInit() {}

  ngAfterContentInit(): void {
    //  allowed since the parent defined template variable.
    console.log('ngAfterContentInit', this.header);
  }
}
