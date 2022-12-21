import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

const url = 'http://localhost:8080/user/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public pageTitle: string = 'Liste des users';
  public users: any[] = [];

  constructor(private userService: UserService) //
  {}

  ngOnInit(): void {
    this.userService.getUsersFromDatabase(url);
    this.userService.users.subscribe((data) => (this.users = data));
  }
}
