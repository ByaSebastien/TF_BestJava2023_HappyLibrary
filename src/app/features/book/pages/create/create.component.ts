import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  bookForm!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _bookService: BookService
  ) {
    this.bookForm = this._fb.group({
      title:[null,Validators.required],
      description:[null],
      author:[null,Validators.required],
      creationDate:[null]
    });
  }

  onSubmit():void{
    this.bookForm.markAllAsTouched();

    if(!this.bookForm.valid){
      return;
    }

    this._bookService.create(this.bookForm.value).subscribe({
      next: (data)=>{
        console.log("success");
        console.log(data);
      }
    });
  }
}
