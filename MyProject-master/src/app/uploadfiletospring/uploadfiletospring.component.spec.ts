import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfiletospringComponent } from './uploadfiletospring.component';

describe('UploadfiletospringComponent', () => {
  let component: UploadfiletospringComponent;
  let fixture: ComponentFixture<UploadfiletospringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadfiletospringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadfiletospringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
