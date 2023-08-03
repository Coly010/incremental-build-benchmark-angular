import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test62Component } from './test62.component';

describe('Test62Component', () => {
  let component: Test62Component;
  let fixture: ComponentFixture<Test62Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test62Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
