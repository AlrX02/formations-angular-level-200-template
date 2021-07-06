import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrooperListComponent } from './trooper-list.component';

describe('TrooperListComponent', () => {
  let component: TrooperListComponent;
  let fixture: ComponentFixture<TrooperListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrooperListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrooperListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
