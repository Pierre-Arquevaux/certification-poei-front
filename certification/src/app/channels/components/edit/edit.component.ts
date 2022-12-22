import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChannelService } from '../../service/channel.service';


const url = "http://localhost:8080/channel/update"


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  public form = new FormGroup({
    name :new FormControl(),
  })

  constructor(
    private channelService : ChannelService
  ){}

  public submitChannel(): void {
    // console.log(this.form.value);
    this.channelService.updateChannel(url, this.form.value)
  }
}


