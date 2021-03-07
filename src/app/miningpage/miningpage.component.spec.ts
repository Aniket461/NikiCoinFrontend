import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiningpageComponent } from './miningpage.component';

describe('MiningpageComponent', () => {
  let component: MiningpageComponent;
  let fixture: ComponentFixture<MiningpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiningpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiningpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
