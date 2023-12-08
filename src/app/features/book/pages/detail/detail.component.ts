import {Component, OnInit} from '@angular/core';
import {BookModel} from "../../models/book.model";
import {BookService} from "../../services/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  book!: BookModel;

  constructor(
    private readonly _bookService: BookService,
    //Permet d'intéragir avec la Route active
    private readonly _ar: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let bookId = this._ar.snapshot.params['id'];
    this._bookService.getOne(bookId).subscribe({
      next: (data : BookModel) => {
        this.book = data;
      }
    })
  }
}
