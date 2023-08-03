import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mylib3Component } from './mylib3.component';

describe('Mylib3Component', () => {
  let component: Mylib3Component;
  let fixture: ComponentFixture<Mylib3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mylib3Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Mylib3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
