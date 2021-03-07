import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyGeneratorComponent } from './key-generator.component';

describe('KeyGeneratorComponent', () => {
  let component: KeyGeneratorComponent;
  let fixture: ComponentFixture<KeyGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
