import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test68Component } from './test68.component';

describe('Test68Component', () => {
  let component: Test68Component;
  let fixture: ComponentFixture<Test68Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test68Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
