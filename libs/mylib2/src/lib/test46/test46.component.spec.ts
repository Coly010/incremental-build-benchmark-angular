import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test46Component } from './test46.component';

describe('Test46Component', () => {
  let component: Test46Component;
  let fixture: ComponentFixture<Test46Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test46Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
