import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test32Component } from './test32.component';

describe('Test32Component', () => {
  let component: Test32Component;
  let fixture: ComponentFixture<Test32Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test32Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
