import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test53Component } from './test53.component';

describe('Test53Component', () => {
  let component: Test53Component;
  let fixture: ComponentFixture<Test53Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test53Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test53Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
