import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test65Component } from './test65.component';

describe('Test65Component', () => {
  let component: Test65Component;
  let fixture: ComponentFixture<Test65Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test65Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test65Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
