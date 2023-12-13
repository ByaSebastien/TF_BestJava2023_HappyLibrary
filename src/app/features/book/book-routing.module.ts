import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookListComponent} from "./pages/book-list/book-list.component";
import {DetailComponent} from "./pages/detail/detail.component";
import {CreateComponent} from "./pages/create/create.component";
import {isLoggedGuard} from "../../shared/guards/is-logged.guard";
import {bookListResolver} from "./resolvers/book-list.resolver";

const routes: Routes = [
  {path: '', component: BookListComponent,resolve : {br: bookListResolver}},
  {path: 'create',component: CreateComponent, canActivate: [isLoggedGuard]},
  {path: ':id',component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookRoutingModule {
}
