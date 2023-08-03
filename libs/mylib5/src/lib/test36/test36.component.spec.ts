import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test36Component } from './test36.component';

describe('Test36Component', () => {
  let component: Test36Component;
  let fixture: ComponentFixture<Test36Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test36Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
