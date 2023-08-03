import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test44Component } from './test44.component';

describe('Test44Component', () => {
  let component: Test44Component;
  let fixture: ComponentFixture<Test44Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test44Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
