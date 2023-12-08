import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BookModel} from "../models/book.model";
import {environment} from "../../../../environments/environment.development";
import {BookFormModel} from "../models/book.form.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private readonly _http: HttpClient
  ) {
  }

  getAll(): Observable<BookModel[]> {
    return this._http.get<BookModel[]>(`${environment.apiBaseUrl}/books`);
  }

  getOne(id: number): Observable<BookModel> {
    return this._http.get<BookModel>(`${environment.apiBaseUrl}/books/${id}`);
  }

  create(form: BookFormModel): Observable<BookModel> {
    return this._http.post<BookModel>(`${environment.apiBaseUrl}/books`, form);
  }

  update(id: number, form: BookFormModel): Observable<BookModel> {
    return this._http.put<BookModel>(`${environment.apiBaseUrl}/books/${id}`, form)
  }

  delete(id: number) {
    this._http.delete(`${environment.apiBaseUrl}/books/${id}`)
  }
}
