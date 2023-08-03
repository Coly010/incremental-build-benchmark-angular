import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test96Component } from './test96.component';

describe('Test96Component', () => {
  let component: Test96Component;
  let fixture: ComponentFixture<Test96Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test96Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test96Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
