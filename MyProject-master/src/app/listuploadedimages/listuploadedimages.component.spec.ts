import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuploadedimagesComponent } from './listuploadedimages.component';

describe('ListuploadedimagesComponent', () => {
  let component: ListuploadedimagesComponent;
  let fixture: ComponentFixture<ListuploadedimagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListuploadedimagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuploadedimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
