import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {RegisterFormModel} from "../../models/register.form.model";
import {SessionService} from "../../services/session.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _router: Router,
    private readonly _sessionService: SessionService
  ) {
    this.registerForm = this._fb.group({
      email: [null, [Validators.required, Validators.maxLength(100),Validators.email]],
      password: [null, [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(): void {
    this.registerForm.markAllAsTouched();

    if (!this.registerForm.valid) {
      console.log('error')
      return;
    }

    let credential: RegisterFormModel = this.registerForm.value;

    this._authService.register(credential).subscribe({
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
