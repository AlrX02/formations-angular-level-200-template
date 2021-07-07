import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponListComponent } from './weapon-list.component';

fdescribe('WeaponListComponent', () => {
  let component: WeaponListComponent;
  let fixture: ComponentFixture<WeaponListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeaponListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 2 weapons', () => {
    component.items = [
      { id: 1, label: 'blaster' },
      { id: 2, label: 'laser sabre' },
    ];

    const table = fixture.nativeElement.querySelector('table');

    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(2);
  });
});
