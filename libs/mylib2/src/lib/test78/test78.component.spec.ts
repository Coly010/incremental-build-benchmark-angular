import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test78Component } from './test78.component';

describe('Test78Component', () => {
  let component: Test78Component;
  let fixture: ComponentFixture<Test78Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test78Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
