import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelService } from '../../service/channel.service';


const url = "http://localhost:8080/channel/delete"


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {

  public id?: number;
  public channel?: any;

  constructor(
    private channelService: ChannelService,
    private route: ActivatedRoute,
    private router: Router,
  ){}

  ngOnInit(): void
  {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    // this.book = this.channelService.getChannel( this.id );
    this.channelService.getChannel(url, this.id);
    this.channelService.channel.subscribe(data => this.channel = data);
  }

  proceedToDelete()
  {
    this.channelService.deleteChannel(url, this.id);
    this.redirectTo('/channels/')
  }

  public redirectTo(url:string) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => this.router.navigate([url]))
  }

}
