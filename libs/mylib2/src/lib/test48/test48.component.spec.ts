import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test48Component } from './test48.component';

describe('Test48Component', () => {
  let component: Test48Component;
  let fixture: ComponentFixture<Test48Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test48Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
