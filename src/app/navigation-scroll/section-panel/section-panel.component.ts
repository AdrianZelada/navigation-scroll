import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { Subject} from 'rxjs';

@Component({
  selector: 'app-section-panel',
  templateUrl: './section-panel.component.html',
  styleUrls: ['./section-panel.component.scss']
})
export class SectionPanelComponent implements OnInit, AfterViewInit{

  _focus: boolean;
  validate: boolean = false;
  @Input() name: string;
  @Input() active = false;
  @Input() set focus(valid) {
    this._focus = valid;
    this.emitValidFocus.next(valid);
  }
  get () {
    return this._focus;
  }

  @Input() template;
  @ViewChild('section') section: ElementRef;
  public offsetTop = 0;
  public clientHeight = 0;
  public emitValidFocus: Subject<any> = new Subject();
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.offsetTop = this.section.nativeElement.offsetTop;
    this.clientHeight = this.section.nativeElement.clientHeight;
  }

  validateSection() {
    this.validate = true;
  }
}
