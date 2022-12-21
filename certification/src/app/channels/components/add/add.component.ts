import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { ChannelService } from '../../service/channel.service';




const url = "http://localhost:8080/channel/post"



@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent {
  public form = new FormGroup({
    name :new FormControl(),
  })


  constructor(
    private channelService : ChannelService
  ){}



  public submitChannel(): void {
    // console.log(this.form.value);
    this.channelService.createChannel(url, this.form.value)
  }
}


