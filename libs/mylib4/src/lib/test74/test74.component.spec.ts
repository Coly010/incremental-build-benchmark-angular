import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test74Component } from './test74.component';

describe('Test74Component', () => {
  let component: Test74Component;
  let fixture: ComponentFixture<Test74Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test74Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test74Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
