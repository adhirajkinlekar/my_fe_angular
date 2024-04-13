import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  foodForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.foodForm = this.fb.group({
      name: ['', Validators.required,Validators.minLength(2)],
      description: ['',Validators.required, Validators.minLength(10)],
      price: ['', Validators.required, Validators.min(1)],
      addOns: this.fb.array([])
    });
   }

  get addOns() {
    return this.foodForm.get('addOns') as FormArray;
  }

  addAddOn() {
    this.addOns.push(this.createAddOn());
  }

  createAddOn(): FormGroup {
    return this.fb.group({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      price: ['', Validators.required, Validators.min(1)],
      type: ['', Validators.required]
    });
  }

  removeAddOn(index: number) {
    this.addOns.removeAt(index);
  }
 

  submitForm() {
    console.log(this.foodForm.value);
  }


}
