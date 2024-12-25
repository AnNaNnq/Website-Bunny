import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauLapinComponent } from './nouveau-lapin.component';

describe('NouveauLapinComponent', () => {
  let component: NouveauLapinComponent;
  let fixture: ComponentFixture<NouveauLapinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauLapinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouveauLapinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
