import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {SharedModule} from "../../shared/shared.module";
import { BookListComponent } from './pages/book-list/book-list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { CreateComponent } from './pages/create/create.component';


@NgModule({
  declarations: [
  
    BookListComponent,
       DetailComponent,
       CreateComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule
  ]
})
export class BookModule { }
