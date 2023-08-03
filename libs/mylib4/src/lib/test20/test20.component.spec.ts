import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test20Component } from './test20.component';

describe('Test20Component', () => {
  let component: Test20Component;
  let fixture: ComponentFixture<Test20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test20Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
