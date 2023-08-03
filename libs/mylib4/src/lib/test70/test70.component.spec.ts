import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test70Component } from './test70.component';

describe('Test70Component', () => {
  let component: Test70Component;
  let fixture: ComponentFixture<Test70Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test70Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
