import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroideListComponent } from './droide-list.component';

describe('DroideListComponent', () => {
  let component: DroideListComponent;
  let fixture: ComponentFixture<DroideListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroideListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
