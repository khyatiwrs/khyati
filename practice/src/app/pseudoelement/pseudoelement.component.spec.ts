import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PseudoelementComponent } from './pseudoelement.component';

describe('PseudoelementComponent', () => {
  let component: PseudoelementComponent;
  let fixture: ComponentFixture<PseudoelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PseudoelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PseudoelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
