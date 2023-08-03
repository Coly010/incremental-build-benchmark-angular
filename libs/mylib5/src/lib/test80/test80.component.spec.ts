import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test80Component } from './test80.component';

describe('Test80Component', () => {
  let component: Test80Component;
  let fixture: ComponentFixture<Test80Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test80Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test80Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
