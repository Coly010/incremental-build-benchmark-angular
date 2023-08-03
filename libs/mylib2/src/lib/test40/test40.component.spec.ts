import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test40Component } from './test40.component';

describe('Test40Component', () => {
  let component: Test40Component;
  let fixture: ComponentFixture<Test40Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test40Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
