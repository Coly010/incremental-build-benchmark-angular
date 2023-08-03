import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test67Component } from './test67.component';

describe('Test67Component', () => {
  let component: Test67Component;
  let fixture: ComponentFixture<Test67Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test67Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test67Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
