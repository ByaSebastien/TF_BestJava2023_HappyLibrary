import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from "./pages/book-list/book-list.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {CreateComponent} from "./pages/create/create.component";

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'create',component: CreateComponent},
  {path: ':id',component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule {
}
