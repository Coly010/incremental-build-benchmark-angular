import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test88Component } from './test88.component';

describe('Test88Component', () => {
  let component: Test88Component;
  let fixture: ComponentFixture<Test88Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test88Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test88Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
