import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {LoginFormModel} from "../../models/login.form.model";
import {Router} from "@angular/router";
import {SessionService} from "../../services/session.service";

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
    private readonly _sessionService: SessionService,
    private readonly _router: Router
  ) {
    this.loginForm = this._fb.group({
      email: [null, [Validators.required, Validators.maxLength(100),Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    this.loginForm.markAllAsTouched();

    if (!this.loginForm.valid) {
      console.log('error')
      return;
    }

    let credential: LoginFormModel = this.loginForm.value;

    this._authService.login(credential).subscribe({
      next: (data) => {
        console.log("success");
        console.log(data);
        this._sessionService.start(data);
        this._router.navigate(['home']);
      },
      error: (error) => {
        console.log(error);
      },
      complete: ()=>{
        console.log("Complete");
      }
    });
  }
}
