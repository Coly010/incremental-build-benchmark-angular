import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test61Component } from './test61.component';

describe('Test61Component', () => {
  let component: Test61Component;
  let fixture: ComponentFixture<Test61Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test61Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test61Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
