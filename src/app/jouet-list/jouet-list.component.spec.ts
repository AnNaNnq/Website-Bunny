import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JouetListComponent } from './jouet-list.component';

describe('JouetListComponent', () => {
  let component: JouetListComponent;
  let fixture: ComponentFixture<JouetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JouetListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JouetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
