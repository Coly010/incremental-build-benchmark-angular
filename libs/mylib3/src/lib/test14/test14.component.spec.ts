import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test14Component } from './test14.component';

describe('Test14Component', () => {
  let component: Test14Component;
  let fixture: ComponentFixture<Test14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test14Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
