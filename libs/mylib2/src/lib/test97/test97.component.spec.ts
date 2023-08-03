import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test97Component } from './test97.component';

describe('Test97Component', () => {
  let component: Test97Component;
  let fixture: ComponentFixture<Test97Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test97Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test97Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
