import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test85Component } from './test85.component';

describe('Test85Component', () => {
  let component: Test85Component;
  let fixture: ComponentFixture<Test85Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test85Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test85Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
