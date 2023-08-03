import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test39Component } from './test39.component';

describe('Test39Component', () => {
  let component: Test39Component;
  let fixture: ComponentFixture<Test39Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test39Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
