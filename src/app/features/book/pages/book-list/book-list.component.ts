import {Component, OnInit} from '@angular/core';
import {BookModel} from "../../models/book.model";
import {BookService} from "../../services/book.service";
import {bookListResolver} from "../../resolvers/book-list.resolver";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  books!: BookModel[];

  constructor(
    private readonly _bookService: BookService,
    private readonly _ar : ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this._ar.data.subscribe((data: any) => {
      this.books = data.br;
      console.log(this.books);
    });
  }
}
