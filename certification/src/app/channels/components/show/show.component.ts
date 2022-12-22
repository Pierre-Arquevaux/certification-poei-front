import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ChannelService } from '../../service/channel.service';
import { MessageService } from 'src/app/messages/service/message.service';
import { UserService } from 'src/app/users/service/user.service';
import { FormControl, FormGroup } from '@angular/forms';


const url = "http://localhost:8080/channel/list";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public id?: number;
  public channel?: any;
  public messages:any[] = [];
  public users: any[] = [];
  public form = new FormGroup({

    content :new FormControl(),
    user :new FormControl(),
    channel :new FormControl(),


  })

  constructor(
    private channelService: ChannelService,
    private messageService : MessageService,
    private userService : UserService,
    private route: ActivatedRoute,
    private router : Router
  ){}

  ngOnInit(): void
  {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    // this.channel = this.channelService.getChannel( this.id );
    this.channelService.getChannel(url, this.id);
    this.channelService.channel.subscribe(data => {
      this.channel = data;
    });

    this.messageService.getMessagesFromDatabase("http://localhost:8080/message/list")
    this.messageService.messages.subscribe(response => {
      this.messages = [];
      for(let item of response) {
        if(item.channel.id == this.id) {
          this.messages.push(item)
        }
      }
    })

    this.userService.getUsersFromDatabase("http://localhost:8080/user/list");
    this.userService.users.subscribe((data) => (this.users = data));

  }

  public submitMessage(): void {
    console.log(this.form.value);

    this.messageService.createMessage("http://localhost:8080/message/post", this.form.value);
    // location.reload();
    this.redirectTo('/channels/'+ this.id)
  }

  public redirectTo(url:string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => this.router.navigate([url]))
  }

}
