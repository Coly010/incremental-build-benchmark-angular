import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test84Component } from './test84.component';

describe('Test84Component', () => {
  let component: Test84Component;
  let fixture: ComponentFixture<Test84Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test84Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test84Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
