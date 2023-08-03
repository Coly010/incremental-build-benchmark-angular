import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test29Component } from './test29.component';

describe('Test29Component', () => {
  let component: Test29Component;
  let fixture: ComponentFixture<Test29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test29Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
