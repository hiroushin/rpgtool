import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputNumberSlideComponent } from './input-number-slide.component';

describe('InputNumberSlideComponent', () => {
  let component: InputNumberSlideComponent;
  let fixture: ComponentFixture<InputNumberSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputNumberSlideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputNumberSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
