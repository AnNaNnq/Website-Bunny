import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapinListComponent } from './lapin-list.component';

describe('LapinListComponent', () => {
  let component: LapinListComponent;
  let fixture: ComponentFixture<LapinListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LapinListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LapinListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
