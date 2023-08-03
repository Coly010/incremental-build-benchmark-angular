import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test30Component } from './test30.component';

describe('Test30Component', () => {
  let component: Test30Component;
  let fixture: ComponentFixture<Test30Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test30Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
