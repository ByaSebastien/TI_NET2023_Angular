import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Book, FormBook } from 'src/app/models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url: string = 'https://localhost:7095/api/book';

  constructor(
    private _http: HttpClient
  ) { }

  getAll(): Observable<Book[]> {
    return this._http.get<Book[]>(this.url);
  }

  create(book: FormBook): Observable<any> {
    return this._http.post(this.url, book);
  }
}
