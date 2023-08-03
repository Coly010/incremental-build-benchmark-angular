import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test94Component } from './test94.component';

describe('Test94Component', () => {
  let component: Test94Component;
  let fixture: ComponentFixture<Test94Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test94Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test94Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
