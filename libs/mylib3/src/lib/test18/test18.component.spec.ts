import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test18Component } from './test18.component';

describe('Test18Component', () => {
  let component: Test18Component;
  let fixture: ComponentFixture<Test18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test18Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
