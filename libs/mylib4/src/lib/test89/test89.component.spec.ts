import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test89Component } from './test89.component';

describe('Test89Component', () => {
  let component: Test89Component;
  let fixture: ComponentFixture<Test89Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test89Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test89Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
