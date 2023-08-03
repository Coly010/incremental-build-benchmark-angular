import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test34Component } from './test34.component';

describe('Test34Component', () => {
  let component: Test34Component;
  let fixture: ComponentFixture<Test34Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test34Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
