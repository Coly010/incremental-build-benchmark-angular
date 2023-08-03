import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test49Component } from './test49.component';

describe('Test49Component', () => {
  let component: Test49Component;
  let fixture: ComponentFixture<Test49Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test49Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
