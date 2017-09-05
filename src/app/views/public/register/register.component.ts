import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SettingsService } from '../../../core/settings/settings.service';
import { UserService } from '../../../core/guard/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  valForm: FormGroup;

  constructor(
    public settings: SettingsService,
    fb: FormBuilder,
    private router: Router,
    private userSer: UserService
  ) {
    this.valForm = fb.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      mobile: [null, Validators.compose([Validators.required, Validators.pattern('^1[0-9]{10}$')])],
      password: [null, Validators.required],
      agreed: [null, Validators.required]
    });
  }
  // todo 登录操作
  submit() {
    for (const i in this.valForm.controls) {
      this.valForm.controls[i].markAsDirty();
    }
    if (this.valForm.valid) {
      console.log('valid!');
      console.log(this.valForm.value);
      this.router.navigate(['']);
      this.userSer.login('');
    }
  }

  ngOnInit() {
  }

}
