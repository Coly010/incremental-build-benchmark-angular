import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test43Component } from './test43.component';

describe('Test43Component', () => {
  let component: Test43Component;
  let fixture: ComponentFixture<Test43Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test43Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
