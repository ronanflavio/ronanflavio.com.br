import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  public skills = [
    { name: 'PHP', value: 8 },
    { name: 'Laravel', value: 9 },
    { name: 'Angular', value: 7 },
    { name: 'Javascript', value: 7 },
    { name: 'CSS', value: 8 },
    { name: 'HTML', value: 9 },
    { name: 'Git', value: 7 },
    { name: 'OOP', value: 8 },
    { name: 'SQL', value: 7 },
    { name: 'Docker', value: 6 },
  ]

  public customColors = [];

  constructor() { }

  ngOnInit(): void {
    this._setCustomColors();
  }

  private _setCustomColors(): void {
    this.skills.forEach(skill => {
      this.customColors.push({
        name: skill.name,
        value: '#1565c0'
      });
    });
  }

}
