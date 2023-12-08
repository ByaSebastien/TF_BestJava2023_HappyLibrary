import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {LoginFormModel} from "../../models/login.form.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {
    this.loginForm = this._fb.group({
      login: [null, [Validators.required, Validators.maxLength(10)]],
      password: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();
    console.log(this.loginForm.get('password')?.errors?.['minlength'])
    if (!this.loginForm.valid) {
      console.log('error')
      return;
    }

    let login: LoginFormModel = this.loginForm.value;
    if (!this._authService.login(login)) {
      console.log('Failed');
      return;
    }

    console.log('success')
    this._router.navigate(['/home']);
  }
}
