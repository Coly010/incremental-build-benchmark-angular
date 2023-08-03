import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test42Component } from './test42.component';

describe('Test42Component', () => {
  let component: Test42Component;
  let fixture: ComponentFixture<Test42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test42Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
