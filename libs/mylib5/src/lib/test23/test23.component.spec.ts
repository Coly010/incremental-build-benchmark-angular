import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test23Component } from './test23.component';

describe('Test23Component', () => {
  let component: Test23Component;
  let fixture: ComponentFixture<Test23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test23Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
