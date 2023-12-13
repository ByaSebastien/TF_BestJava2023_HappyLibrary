import { ResolveFn } from '@angular/router';
import {Observable} from "rxjs";
import {BookModel} from "../models/book.model";
import {BookService} from "../services/book.service";
import {inject} from "@angular/core";

export const bookListResolver: ResolveFn<Observable<BookModel[]>> = (route, state) => {
  const bookService: BookService = inject(BookService);

  return bookService.getAll();
};
