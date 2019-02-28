import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PelangganComponent } from './pelanggan.component';

describe('PelangganComponent', () => {
  let component: PelangganComponent;
  let fixture: ComponentFixture<PelangganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PelangganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PelangganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
