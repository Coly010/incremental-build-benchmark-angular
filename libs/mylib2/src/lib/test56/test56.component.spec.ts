import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test56Component } from './test56.component';

describe('Test56Component', () => {
  let component: Test56Component;
  let fixture: ComponentFixture<Test56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test56Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
