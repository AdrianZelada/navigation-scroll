import {Component, OnInit, ContentChildren, QueryList, AfterContentInit, ViewChild, ElementRef} from '@angular/core';
import { SectionPanelComponent } from '../section-panel/section-panel.component';

@Component({
  selector: 'app-panel-scroll',
  templateUrl: './panel-scroll.component.html',
  styleUrls: ['./panel-scroll.component.scss']
})
export class PanelScrollComponent implements OnInit , AfterContentInit{

  listNav: Array<any> = [];
  heightSpace: string = '0px';
  tockTop: number = 0;

  validated: boolean =false;
  @ContentChildren(SectionPanelComponent) navs: QueryList<SectionPanelComponent> = new QueryList();

  @ViewChild('panel') panel: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.listNav = this.navs.map((item: SectionPanelComponent) => {
      return {
        name: item.name,
        active: false,
        focus: item._focus
      };
    });
    this.navs.forEach((nav: SectionPanelComponent, ind: number) => {
      nav.emitValidFocus.subscribe((valid) => {
        this.listNav[ind].focus = valid;
      });
    });

    const height = ( this.panel.nativeElement.clientHeight - this.navs.toArray()[this.navs.length - 1].clientHeight);
    this.tockTop = Math.round(this.panel.nativeElement.clientHeight / 3);
    this.heightSpace = `${height > 0 ? height : 0}px`;
    this.panel.nativeElement.addEventListener('scroll', (e) => {
      this.navs.forEach((content: SectionPanelComponent, index: number) => {
        this.listNav[index].active = (content.offsetTop  - this.panel.nativeElement.offsetTop) <= (this.panel.nativeElement.scrollTop + this.tockTop);
      });
    });
  }

  selectNav(item) {
    this.navs.forEach((nav: SectionPanelComponent, index: number) => {
      if (nav.name === item.name) {
        this.moveScroll(index === 0 ? 0 : nav.offsetTop - this.tockTop);
      }
    });
  }

  moveScroll(to: number) {
    const signal = to > this.panel.nativeElement.scrollTop ? 10 : -10;
    const interval = setInterval(() => {
      if (( to + 10 >= this.panel.nativeElement.scrollTop) && ( to - 10 <= this.panel.nativeElement.scrollTop)) {
        clearInterval(interval);
      } else {
        this.panel.nativeElement.scrollTop = this.panel.nativeElement.scrollTop + signal;
      }
    }, 5);
  }

  validateSections() {
    let ind: any = null;
    this.navs.forEach((nav: SectionPanelComponent, index: number) => {
      nav.validateSection();
      if (nav._focus && ind === null) {
        ind = index;
      }
    });
    this.selectNav(this.listNav[ind]);
    this.validated = true;
  }
}

