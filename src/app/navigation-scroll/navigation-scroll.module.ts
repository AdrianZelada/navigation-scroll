import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelScrollComponent } from './panel-scroll/panel-scroll.component';
import { NavScrollComponent } from './nav-scroll/nav-scroll.component';
import { SectionPanelComponent } from './section-panel/section-panel.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';

@NgModule({
  declarations: [PanelScrollComponent, NavScrollComponent, SectionPanelComponent, FooterNavComponent],
  exports: [PanelScrollComponent, NavScrollComponent, SectionPanelComponent, FooterNavComponent],
  imports: [
    CommonModule
  ]
})
export class NavigationScrollModule { }
