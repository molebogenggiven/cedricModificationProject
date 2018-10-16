import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralizeHeaderComponent } from './centralize-header.component';

describe('CentralizeHeaderComponent', () => {
  let component: CentralizeHeaderComponent;
  let fixture: ComponentFixture<CentralizeHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CentralizeHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CentralizeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
