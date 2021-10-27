import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QbDeptComponent } from './qb-dept.component';

describe('QbDeptComponent', () => {
  let component: QbDeptComponent;
  let fixture: ComponentFixture<QbDeptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QbDeptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QbDeptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
