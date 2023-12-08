import {Component, OnInit} from '@angular/core';
import {BookModel} from "../../models/book.model";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  books!: BookModel[];

  constructor(
    private readonly _bookService: BookService
  ) {
  }

  ngOnInit(): void {
    this._bookService.getAll().subscribe({
      next: (data: BookModel[]) => {
        this.books = data;
      }
    });
  }
}
