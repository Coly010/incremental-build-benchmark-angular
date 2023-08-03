import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mylib4Component } from './mylib4.component';

describe('Mylib4Component', () => {
  let component: Mylib4Component;
  let fixture: ComponentFixture<Mylib4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mylib4Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Mylib4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
