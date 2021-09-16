import {Component} from "@angular/core";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em {
      float: right;
      color: #e95c65;
      padding-left: .75rem;
    }
  `]
})
export class LoginComponent {
  username: any
  password: any
  mouseoverLoginBtn: any

  constructor(private authService: AuthService, private router: Router) {
  }

  login({formValues}: { formValues: any }) {
    // console.log(formValues);
    this.authService.loginUser(formValues.userName, formValues.password)
    this.router.navigate(['events'])
  }

  cancel() {
    this.router.navigate(['events'])
  }
}
