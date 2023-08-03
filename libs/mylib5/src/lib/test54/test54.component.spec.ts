import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test54Component } from './test54.component';

describe('Test54Component', () => {
  let component: Test54Component;
  let fixture: ComponentFixture<Test54Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test54Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test54Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
