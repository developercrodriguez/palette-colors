import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCapsuleComponent } from './color-capsule.component';

describe('ColorCapsuleComponent', () => {
  let component: ColorCapsuleComponent;
  let fixture: ComponentFixture<ColorCapsuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorCapsuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
