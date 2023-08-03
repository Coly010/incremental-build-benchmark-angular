import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test76Component } from './test76.component';

describe('Test76Component', () => {
  let component: Test76Component;
  let fixture: ComponentFixture<Test76Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test76Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test76Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
