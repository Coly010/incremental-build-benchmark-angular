import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test72Component } from './test72.component';

describe('Test72Component', () => {
  let component: Test72Component;
  let fixture: ComponentFixture<Test72Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test72Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
