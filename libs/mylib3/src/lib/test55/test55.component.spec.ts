import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test55Component } from './test55.component';

describe('Test55Component', () => {
  let component: Test55Component;
  let fixture: ComponentFixture<Test55Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test55Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test55Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
