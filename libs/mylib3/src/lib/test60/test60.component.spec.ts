import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test60Component } from './test60.component';

describe('Test60Component', () => {
  let component: Test60Component;
  let fixture: ComponentFixture<Test60Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test60Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
