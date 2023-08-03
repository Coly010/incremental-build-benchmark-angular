import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test87Component } from './test87.component';

describe('Test87Component', () => {
  let component: Test87Component;
  let fixture: ComponentFixture<Test87Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test87Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test87Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
