import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../service/user.service';

const url = 'http://localhost:8080/user/post';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  public form = new FormGroup({
    username: new FormControl(),
  });

  constructor(private userService: UserService) {}

  public submitUser(): void {
    // console.log(this.form.value);
    this.userService.createUser(url, this.form.value);
  }
}
