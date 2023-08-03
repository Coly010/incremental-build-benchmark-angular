import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test75Component } from './test75.component';

describe('Test75Component', () => {
  let component: Test75Component;
  let fixture: ComponentFixture<Test75Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test75Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
