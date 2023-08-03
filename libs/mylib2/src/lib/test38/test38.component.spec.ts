import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test38Component } from './test38.component';

describe('Test38Component', () => {
  let component: Test38Component;
  let fixture: ComponentFixture<Test38Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test38Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
