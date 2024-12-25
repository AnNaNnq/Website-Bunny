import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapinComponent } from './lapin.component';

describe('LapinComponent', () => {
  let component: LapinComponent;
  let fixture: ComponentFixture<LapinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LapinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
