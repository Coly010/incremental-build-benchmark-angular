import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test77Component } from './test77.component';

describe('Test77Component', () => {
  let component: Test77Component;
  let fixture: ComponentFixture<Test77Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test77Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test77Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
