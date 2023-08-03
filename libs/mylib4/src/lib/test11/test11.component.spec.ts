import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test11Component } from './test11.component';

describe('Test11Component', () => {
  let component: Test11Component;
  let fixture: ComponentFixture<Test11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test11Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
