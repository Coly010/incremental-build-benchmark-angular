import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test31Component } from './test31.component';

describe('Test31Component', () => {
  let component: Test31Component;
  let fixture: ComponentFixture<Test31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test31Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
