import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test71Component } from './test71.component';

describe('Test71Component', () => {
  let component: Test71Component;
  let fixture: ComponentFixture<Test71Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test71Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test71Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
