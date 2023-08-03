import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test82Component } from './test82.component';

describe('Test82Component', () => {
  let component: Test82Component;
  let fixture: ComponentFixture<Test82Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test82Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test82Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
