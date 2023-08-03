import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test90Component } from './test90.component';

describe('Test90Component', () => {
  let component: Test90Component;
  let fixture: ComponentFixture<Test90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test90Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
