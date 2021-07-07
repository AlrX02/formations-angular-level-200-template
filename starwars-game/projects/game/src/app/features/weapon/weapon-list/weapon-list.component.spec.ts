import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeaponService } from '../services/weapon.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WeaponListComponent } from './weapon-list.component';

fdescribe('WeaponListComponent', () => {
  let component: WeaponListComponent;
  let fixture: ComponentFixture<WeaponListComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeaponListComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        WeaponService
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    //const service = TestBed.inject(WeaponService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 2 weapons', () => {
    // component.items = [
    //   { id: 1, label: 'blaster' },
    //   { id: 2, label: 'laser sabre' },
    // ];

    fixture.detectChanges();
    const table = fixture.nativeElement.querySelector('table');

    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(2);

    const testRequestAll = httpMock.expectOne('urltoto');
    const testRequestOne = httpMock.expectOne('urltotoOne');

    // Mock du retour de l'API ! :)
    testRequestAll.flush([
      { id: 1, label: 'blaster' },
      { id: 2, label: 'laser sabre' },
    ]);

    testRequestOne.flush(
      { id: 1, label: 'blaster' });

  });
});
