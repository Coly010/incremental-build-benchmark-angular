import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test66Component } from './test66.component';

describe('Test66Component', () => {
  let component: Test66Component;
  let fixture: ComponentFixture<Test66Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test66Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test66Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
