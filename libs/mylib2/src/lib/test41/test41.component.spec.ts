import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test41Component } from './test41.component';

describe('Test41Component', () => {
  let component: Test41Component;
  let fixture: ComponentFixture<Test41Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test41Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
