import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test24Component } from './test24.component';

describe('Test24Component', () => {
  let component: Test24Component;
  let fixture: ComponentFixture<Test24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test24Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
