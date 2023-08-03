import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test93Component } from './test93.component';

describe('Test93Component', () => {
  let component: Test93Component;
  let fixture: ComponentFixture<Test93Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test93Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test93Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
