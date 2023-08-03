import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test73Component } from './test73.component';

describe('Test73Component', () => {
  let component: Test73Component;
  let fixture: ComponentFixture<Test73Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test73Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
