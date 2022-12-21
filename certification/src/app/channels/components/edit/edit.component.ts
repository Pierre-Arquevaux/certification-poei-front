import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from '../../service/channel.service';


const url = "http://localhost:8080/channel" 


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id?: number;
  public form: FormGroup;
  
  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ){
    this.form = this.fb.group({
      name: [],
    })
  }

  ngOnInit(): void 
  {
    // Get ID from URL
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    // Get Channel data
    this.channelService.getChannel(url, this.id);
    this.channelService.channel.subscribe(data => {

      this.form.patchValue({
        name: data.name,
      });

    });
  }

  public submitChannel(): void
  {
    this.channelService.editChannel(url, this.id, this.form.value);
  }
}



