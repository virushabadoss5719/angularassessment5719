import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';


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
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      if (this.authService.currentUserValue) {
        console.log('inside sin');
        this.router.navigate(['/shop']);
      }
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/shop';
      console.log(this.returnUrl);
      this.email = new FormControl('', [Validators.required]);
      this.password = new FormControl('', [Validators.required]);
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  login() {
    if (this.loginForm.invalid) {
        alert('invalid data submitted');
        return;
    }
    //this.authService.login(this.loginForm.value);
    this.authService.login(this.loginForm.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    console.log(error);
                });

    //this.router.navigate([this.returnUrl]);
  }
}
