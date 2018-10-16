import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialmoduleComponent } from './materialmodule.component';

describe('MaterialmoduleComponent', () => {
  let component: MaterialmoduleComponent;
  let fixture: ComponentFixture<MaterialmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
