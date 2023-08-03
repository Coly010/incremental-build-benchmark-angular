import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test13Component } from './test13.component';

describe('Test13Component', () => {
  let component: Test13Component;
  let fixture: ComponentFixture<Test13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test13Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
