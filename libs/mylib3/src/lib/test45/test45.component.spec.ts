import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test45Component } from './test45.component';

describe('Test45Component', () => {
  let component: Test45Component;
  let fixture: ComponentFixture<Test45Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test45Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
