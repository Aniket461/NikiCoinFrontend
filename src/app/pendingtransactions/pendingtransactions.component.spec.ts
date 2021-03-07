import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingtransactionsComponent } from './pendingtransactions.component';

describe('PendingtransactionsComponent', () => {
  let component: PendingtransactionsComponent;
  let fixture: ComponentFixture<PendingtransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingtransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingtransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
