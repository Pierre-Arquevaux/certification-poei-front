import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/channels/service/channel.service';


const url = "http://localhost:8080/channel/list"

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})

export class SidebarComponent implements OnInit{

  public channels:any[] = [];

  constructor(

    private channelService: ChannelService,

    //

  ) {}

  ngOnInit(): void {
    this.channelService.getChannelsFromDatabase(url)
    this.channelService.channels.subscribe(data => this.channels = data)
  }

}
