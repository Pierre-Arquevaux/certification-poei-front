import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs'; //Todo : 2.A import de la class behavior subject



import { HttpClient, HttpHeaders } from '@angular/common/http'; // Todo : 3.A import de http client le 1 dans message module



@Injectable({

  providedIn: 'root',

})

export class MessageService {

  //Todo : 2.B Creation de la propriété Observable

  public _messages = new BehaviorSubject<any>([]);

  public _message = new BehaviorSubject<any>({});



  constructor(

    private httpClient: HttpClient // Todo 3.B Instance de la classe Http Client

  ) {}



  public getMessagesFromDatabase(url: string): void {

    this.httpClient

      .get(url)

      .subscribe((response) => this._messages.next(response));

  }

  /**

   * get message list

   */

  public get messages() {

    return this._messages;

  }



  /**

   * get a specific message by id

   */

  public getMessage(url:string, id: number)

  {

    url = `${url}/${id}`;

    this.httpClient.get(url).subscribe(response => this.message.next(response));



   }



   public get message(){

    return this._message;

   }



  public createMessage(url: string, message: any) {



    const headers = new HttpHeaders({

      'Content-Type' : 'application/json'

    });



    const options = {

      headers

    }

    this.httpClient.post(url, message, options)

      .subscribe(response => console.log(response));

  }







}
