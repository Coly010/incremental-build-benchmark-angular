import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test95Component } from './test95.component';

describe('Test95Component', () => {
  let component: Test95Component;
  let fixture: ComponentFixture<Test95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test95Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
