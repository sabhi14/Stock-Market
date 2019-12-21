import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpoDisplayComponent } from './ipo-display.component';

describe('IpoDisplayComponent', () => {
  let component: IpoDisplayComponent;
  let fixture: ComponentFixture<IpoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
