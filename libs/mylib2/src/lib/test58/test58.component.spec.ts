import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test58Component } from './test58.component';

describe('Test58Component', () => {
  let component: Test58Component;
  let fixture: ComponentFixture<Test58Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test58Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test58Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
