import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test33Component } from './test33.component';

describe('Test33Component', () => {
  let component: Test33Component;
  let fixture: ComponentFixture<Test33Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test33Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
