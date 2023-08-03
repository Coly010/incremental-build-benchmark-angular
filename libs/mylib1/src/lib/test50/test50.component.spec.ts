import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test50Component } from './test50.component';

describe('Test50Component', () => {
  let component: Test50Component;
  let fixture: ComponentFixture<Test50Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test50Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
