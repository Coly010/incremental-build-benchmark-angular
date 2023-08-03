import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test17Component } from './test17.component';

describe('Test17Component', () => {
  let component: Test17Component;
  let fixture: ComponentFixture<Test17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test17Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
