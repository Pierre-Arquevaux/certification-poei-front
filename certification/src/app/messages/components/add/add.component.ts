import { Component } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { MessageService } from '../../service/message.service';





const url = "http://localhost:8080/message/post"



@Component({

  selector: 'app-add',

  templateUrl: './add.component.html',

  styleUrls: ['./add.component.css']

})

export class AddComponent {



  public form = new FormGroup({

    content :new FormControl(),


  })



  constructor(

    private messageService : MessageService

  ){}



  public submitMessage(): void {

    // console.log(this.form.value);

    this.messageService.createMessage(url, this.form.value)

  }

}
