import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-skills',
  template: `
    <p>
      skills works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
