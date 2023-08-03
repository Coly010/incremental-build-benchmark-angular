import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test63Component } from './test63.component';

describe('Test63Component', () => {
  let component: Test63Component;
  let fixture: ComponentFixture<Test63Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test63Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
