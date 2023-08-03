import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test92Component } from './test92.component';

describe('Test92Component', () => {
  let component: Test92Component;
  let fixture: ComponentFixture<Test92Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test92Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test92Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
