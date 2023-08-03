import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test28Component } from './test28.component';

describe('Test28Component', () => {
  let component: Test28Component;
  let fixture: ComponentFixture<Test28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test28Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
