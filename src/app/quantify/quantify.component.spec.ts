import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantifyComponent } from './quantify.component';

describe('QuantifyComponent', () => {
  let component: QuantifyComponent;
  let fixture: ComponentFixture<QuantifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
