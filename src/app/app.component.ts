import {Component, ContentChildren, QueryList, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {SectionPanelComponent} from './navigation-scroll/section-panel/section-panel.component';
import {PanelScrollComponent} from './navigation-scroll/panel-scroll/panel-scroll.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'navigation-scroll';

  listItems: Array<any> = [
    {
      name: '1111111',
      active: false
    },
    {
      name: '2222222',
      active: false
    },
    {
      name: '3333333',
      active: false
    },
    {
      name: '4444444',
      active: false
    },
    {
      name: '5555555',
      active: false
    }
  ];

  form: FormGroup;
  @ViewChild(PanelScrollComponent) panel: PanelScrollComponent;
  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({
      group1: this.fb.group({
        name: new FormControl('', Validators.required),
        lastName: new FormControl(''),
        course: new FormControl(''),
        nickname: new FormControl('', Validators.required),
      }),
      group2: new FormGroup({
        name: new FormControl('', Validators.required),
        lastName: new FormControl(''),
        course: new FormControl(''),
        nickname: new FormControl('', Validators.required),
      }),
      group3: new FormGroup({
        name: new FormControl('', Validators.required),
        lastName: new FormControl(''),
        course: new FormControl(''),
        nickname: new FormControl('', Validators.required),
      })
    });

  }

  saveData() {
    this.panel.validateSections();
  }
}
