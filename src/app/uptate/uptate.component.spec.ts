import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UptateComponent } from './uptate.component';

describe('UptateComponent', () => {
  let component: UptateComponent;
  let fixture: ComponentFixture<UptateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UptateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UptateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
