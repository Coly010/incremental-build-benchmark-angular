import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test86Component } from './test86.component';

describe('Test86Component', () => {
  let component: Test86Component;
  let fixture: ComponentFixture<Test86Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test86Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test86Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
