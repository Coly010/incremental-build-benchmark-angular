import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test47Component } from './test47.component';

describe('Test47Component', () => {
  let component: Test47Component;
  let fixture: ComponentFixture<Test47Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test47Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
