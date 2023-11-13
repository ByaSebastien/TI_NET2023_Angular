import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-demo08',
  templateUrl: './demo08.component.html',
  styleUrls: ['./demo08.component.scss']
})
export class Demo08Component implements OnInit {

  books!: Book[];
  books$!: Observable<Book[]>

  constructor(
    private _bookService: BookService
  ) { }

  ngOnInit(): void {
    // this._bookService.getAll().subscribe({
    //   next: (data) => {
    //     this.books = data;
    //     console.log('Success in next');
    //   }
    // });
    this.books$ = this._bookService.getAll();
  }


}
