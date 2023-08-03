import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test16Component } from './test16.component';

describe('Test16Component', () => {
  let component: Test16Component;
  let fixture: ComponentFixture<Test16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test16Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
