import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, mergeMap, pairwise, tap } from 'rxjs/operators';

const arrayValidation = [Validators.min(0), Validators.max(200)];

@Component({
  selector: 'game-weapon-create',
  templateUrl: './weapon-create.component.html',
  styleUrls: ['./weapon-create.component.css']
})
export class WeaponCreateComponent implements OnInit {
  weaponForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.weaponForm = this.formBuilder.group({
      label: ['toto', Validators.required],
      power: [100, arrayValidation]
    });
  }

  clickToSave() {
    console.info('save', this.weaponForm.value);
    // this.service.save(this.weaponForm.value);
  }

  clickToSet() {
    // this.service.save(this.weaponForm.value);
    this.weaponForm.setValue({
      label: 'truc',
      power: 150
    });
    console.info('save', this.weaponForm.value);
  }

  clickToPatch() {
    this.weaponForm.patchValue({
      power: 250
    });

    console.info('save', this.weaponForm.value);
    // this.service.save(this.weaponForm.value);
  }

  ngOnInit(): void {
    this.weaponForm.valueChanges.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      pairwise(),
      tap(item => console.info('tap ?', item) )
    ).subscribe(item => console.info('fin', item));
  }

}
