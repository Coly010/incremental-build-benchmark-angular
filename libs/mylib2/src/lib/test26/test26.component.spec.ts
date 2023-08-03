import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test26Component } from './test26.component';

describe('Test26Component', () => {
  let component: Test26Component;
  let fixture: ComponentFixture<Test26Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test26Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
