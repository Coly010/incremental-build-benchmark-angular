import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test51Component } from './test51.component';

describe('Test51Component', () => {
  let component: Test51Component;
  let fixture: ComponentFixture<Test51Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test51Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
