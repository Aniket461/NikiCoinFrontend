import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleblockComponent } from './singleblock.component';

describe('SingleblockComponent', () => {
  let component: SingleblockComponent;
  let fixture: ComponentFixture<SingleblockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleblockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleblockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
