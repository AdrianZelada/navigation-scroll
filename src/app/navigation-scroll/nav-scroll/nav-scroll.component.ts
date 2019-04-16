import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-scroll',
  templateUrl: './nav-scroll.component.html',
  styleUrls: ['./nav-scroll.component.scss']
})
export class NavScrollComponent implements OnInit {

  @Input() navs: Array<any> = [];
  @Output() select: EventEmitter<any> = new EventEmitter();

  @Input() validated: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  selectNav(item) {
    this.select.emit(item);
  }

}
