import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test83Component } from './test83.component';

describe('Test83Component', () => {
  let component: Test83Component;
  let fixture: ComponentFixture<Test83Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test83Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test83Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
