import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentButtonComponent } from './continent-button.component';

describe('ContinentButtonComponent', () => {
  let component: ContinentButtonComponent;
  let fixture: ComponentFixture<ContinentButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinentButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
