import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mylib5Component } from './mylib5.component';

describe('Mylib5Component', () => {
  let component: Mylib5Component;
  let fixture: ComponentFixture<Mylib5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mylib5Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Mylib5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
