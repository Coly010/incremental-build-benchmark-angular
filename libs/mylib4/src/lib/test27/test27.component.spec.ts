import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test27Component } from './test27.component';

describe('Test27Component', () => {
  let component: Test27Component;
  let fixture: ComponentFixture<Test27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test27Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
