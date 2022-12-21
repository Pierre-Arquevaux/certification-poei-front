import { Component } from '@angular/core';
import { ChannelService } from '../../service/channel.service';


const url = "http://localhost:8080/channel/delete" 


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  constructor(
    private channelService : ChannelService
  ){}


}
