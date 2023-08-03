import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test99Component } from './test99.component';

describe('Test99Component', () => {
  let component: Test99Component;
  let fixture: ComponentFixture<Test99Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test99Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
