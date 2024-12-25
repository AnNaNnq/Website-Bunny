import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NourritureListComponent } from './nourriture-list.component';

describe('NourritureListComponent', () => {
  let component: NourritureListComponent;
  let fixture: ComponentFixture<NourritureListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NourritureListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NourritureListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
