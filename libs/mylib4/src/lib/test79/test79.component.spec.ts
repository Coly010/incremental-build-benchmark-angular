import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test79Component } from './test79.component';

describe('Test79Component', () => {
  let component: Test79Component;
  let fixture: ComponentFixture<Test79Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test79Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test79Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
