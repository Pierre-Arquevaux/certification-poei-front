import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from '../../service/channel.service';
import { MessageService } from 'src/app/messages/service/message.service';

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

  constructor(
    private channelService: ChannelService,
    private messageService : MessageService,
    private route: ActivatedRoute
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
      // this.messages = response
      for(let item of response) {
        if(item.channel.id == this.id) {
          this.messages.push(item)
        }
      }
    })
  }

}
