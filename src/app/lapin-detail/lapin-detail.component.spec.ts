import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapinDetailComponent } from './lapin-detail.component';

describe('LapinDetailComponent', () => {
  let component: LapinDetailComponent;
  let fixture: ComponentFixture<LapinDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapinDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LapinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
