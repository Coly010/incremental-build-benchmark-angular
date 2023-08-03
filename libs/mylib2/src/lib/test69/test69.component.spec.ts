import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test69Component } from './test69.component';

describe('Test69Component', () => {
  let component: Test69Component;
  let fixture: ComponentFixture<Test69Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test69Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
