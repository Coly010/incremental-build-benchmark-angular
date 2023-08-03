import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test64Component } from './test64.component';

describe('Test64Component', () => {
  let component: Test64Component;
  let fixture: ComponentFixture<Test64Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test64Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
