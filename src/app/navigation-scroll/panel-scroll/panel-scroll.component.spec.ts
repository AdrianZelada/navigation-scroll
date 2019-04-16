import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelScrollComponent } from './panel-scroll.component';

describe('PanelScrollComponent', () => {
  let component: PanelScrollComponent;
  let fixture: ComponentFixture<PanelScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
