import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test91Component } from './test91.component';

describe('Test91Component', () => {
  let component: Test91Component;
  let fixture: ComponentFixture<Test91Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test91Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
