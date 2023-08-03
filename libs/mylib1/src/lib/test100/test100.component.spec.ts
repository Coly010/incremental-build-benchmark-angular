import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test100Component } from './test100.component';

describe('Test100Component', () => {
  let component: Test100Component;
  let fixture: ComponentFixture<Test100Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test100Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
