import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareDetailsComponent } from './compare-details.component';

describe('CompareDetailsComponent', () => {
  let component: CompareDetailsComponent;
  let fixture: ComponentFixture<CompareDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
