import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test37Component } from './test37.component';

describe('Test37Component', () => {
  let component: Test37Component;
  let fixture: ComponentFixture<Test37Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test37Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
