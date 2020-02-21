import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { NotificationService } from '../services/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  returnUrl: string;
  submitted: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private notify: NotificationService
    ) {
      if (this.authService.currentUserValue) {
        this.router.navigate(['/dashboard']);
      }
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
      this.email = new FormControl('admin@123.com', [Validators.required, Validators.email]);
      this.password = new FormControl('12345', [Validators.required]);
      this.submitted = false;
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        this.notify.showInfo('Please provide valid inputs');
        this.submitted = false;
        return;
    }
    if (this.authService.login(this.loginForm.value)) {
      this.router.navigate([this.returnUrl]);
    } else {
      this.notify.showInfo('Invalid credentials');
      this.submitted = false;
    }
  }
}
