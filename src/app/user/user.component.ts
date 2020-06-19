import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  constructor(private service: UserService) {
  }

  ngOnInit(): void {
  }

  create() {
    this.service.create(this.user.getRawValue()).subscribe(res => {
      alert(res.firstName);
    });
  }



}
