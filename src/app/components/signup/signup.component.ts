import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });
  
  constructor(
    private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  signUp() {
    // const signUpInfo = this.signupForm.value;
    // const newSignUpInfo = {
    //   emailValue: signUpInfo.email,
    //   nameValue: signUpInfo.name,
    //   passwordInfo: signUpInfo.password
    // }
    // TODO: Use EventEmitter with form value
    console.log(this.signupForm.value);

    this.userService.addUser(this.signupForm.value)
    this.router.navigate(['/chat']);
  }

}
