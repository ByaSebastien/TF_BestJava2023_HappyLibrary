import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/components/home/home.component";
import {LoginComponent} from "./core/components/login/login.component";
import {RegisterComponent} from "./core/components/register/register.component";

const routes: Routes = [
  {path: '', redirectTo: '/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'book', loadChildren: () => import('./features/book/book.module').then(m => m.BookModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
