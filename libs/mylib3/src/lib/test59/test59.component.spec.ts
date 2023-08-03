import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Test59Component } from './test59.component';

describe('Test59Component', () => {
  let component: Test59Component;
  let fixture: ComponentFixture<Test59Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Test59Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Test59Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
