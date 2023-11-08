import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BookForm } from 'src/app/models/bookForm';

@Component({
  selector: 'app-demo06',
  templateUrl: './demo06.component.html',
  styleUrls: ['./demo06.component.scss']
})
export class Demo06Component {

  bookFormGroup!: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) {
    this.bookFormGroup = this._fb.group({
      title: [null, [Validators.required, Validators.maxLength(100)]],
      author: [null, [Validators.required]],
      description: [null],
      creationDate: [null, [Validators.required, this.beforeToday()]],
      nbEdition: [1, [Validators.min(1), Validators.required]]
    });
  }

  onSubmit(): void {
    console.log("In Submit");
    if (this.bookFormGroup.valid) {
      console.log('OK');
    } else {
      console.log('KO');
    }
    let bookForm: BookForm = this.bookFormGroup.value;
    console.log(bookForm);
  }

  beforeToday(): ValidatorFn | null {
    return (control: AbstractControl) => {
      if (new Date(control?.value) < new Date()) {
        return null;
      } else {
        return { beforeToday: true }
      }
    }
  }
}
