import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test25Component } from './test25.component';

describe('Test25Component', () => {
  let component: Test25Component;
  let fixture: ComponentFixture<Test25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test25Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
