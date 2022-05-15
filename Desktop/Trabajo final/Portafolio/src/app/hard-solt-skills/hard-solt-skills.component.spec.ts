import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSoltSkillsComponent } from './hard-solt-skills.component';

describe('HardSoltSkillsComponent', () => {
  let component: HardSoltSkillsComponent;
  let fixture: ComponentFixture<HardSoltSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardSoltSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardSoltSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
