import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvetarioComponent } from './invetario.component';

describe('InvetarioComponent', () => {
  let component: InvetarioComponent;
  let fixture: ComponentFixture<InvetarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvetarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvetarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
