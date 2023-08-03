import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test81Component } from './test81.component';

describe('Test81Component', () => {
  let component: Test81Component;
  let fixture: ComponentFixture<Test81Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test81Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test81Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
