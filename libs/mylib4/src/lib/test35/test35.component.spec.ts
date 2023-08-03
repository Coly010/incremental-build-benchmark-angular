import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test35Component } from './test35.component';

describe('Test35Component', () => {
  let component: Test35Component;
  let fixture: ComponentFixture<Test35Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test35Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
