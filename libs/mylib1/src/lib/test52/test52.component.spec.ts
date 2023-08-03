import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test52Component } from './test52.component';

describe('Test52Component', () => {
  let component: Test52Component;
  let fixture: ComponentFixture<Test52Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test52Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test52Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
