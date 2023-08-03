import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test21Component } from './test21.component';

describe('Test21Component', () => {
  let component: Test21Component;
  let fixture: ComponentFixture<Test21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test21Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
