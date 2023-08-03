import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test57Component } from './test57.component';

describe('Test57Component', () => {
  let component: Test57Component;
  let fixture: ComponentFixture<Test57Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test57Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test57Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
