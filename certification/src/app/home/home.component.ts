import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GeneralService } from './service/general.service';

const url = "http://localhost:8080/general"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{

  public pageTitle: string = 'infos du general';
  public generals:any[] = [];

  constructor(
    private generalService: GeneralService,
    //
  ) {}

  ngOnInit(): void {

    this.generalService.getGeneralFromDatabase(url)
    this.generalService.generals.subscribe(data => console.log(data));
    // this.generalService.generals.subscribe(data => this.generals = data)
  }

}
