import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../service/user.service';


const url = "http://localhost:8080/user/delete"

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  public id?: number;
  public user?: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void
  {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    // this.book = this.channelService.getChannel( this.id );
    this.userService.getUser(url, this.id);
    this.userService.user.subscribe(data => this.user = data);
  }

  proceedToDelete()
  {
    this.userService.deleteUser(url, this.id);
    this.router.navigate(['/users']);
  }
}
