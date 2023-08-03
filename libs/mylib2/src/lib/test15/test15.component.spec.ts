import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test15Component } from './test15.component';

describe('Test15Component', () => {
  let component: Test15Component;
  let fixture: ComponentFixture<Test15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test15Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
