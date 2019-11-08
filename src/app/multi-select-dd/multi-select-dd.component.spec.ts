import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectDdComponent } from './multi-select-dd.component';

describe('MultiSelectDdComponent', () => {
  let component: MultiSelectDdComponent;
  let fixture: ComponentFixture<MultiSelectDdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectDdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectDdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
