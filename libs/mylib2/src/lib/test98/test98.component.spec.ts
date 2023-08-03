import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test98Component } from './test98.component';

describe('Test98Component', () => {
  let component: Test98Component;
  let fixture: ComponentFixture<Test98Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test98Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test98Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
