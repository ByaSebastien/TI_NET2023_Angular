import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  fg!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _bookService: BookService
  ) {
    this.fg = _fb.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      description: [null],
      categoryId: [1, Validators.required],
    })
  }

  onSubmit(): void {
    if (this.fg.valid) {
      this._bookService.create(this.fg.value).subscribe({
        next: () => {
          this._router.navigate(['/demo08']);
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }
}
