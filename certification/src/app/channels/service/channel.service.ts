import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; //Todo : 2.A import de la class behavior subject
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Todo : 3.A import de http client le 1 dans book module

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  //Todo : 2.B Creation de la propriété Observable

  public _channels = new BehaviorSubject<any>([]);

  public _channel = new BehaviorSubject<any>({});

  constructor(
    private httpClient: HttpClient // Todo 3.B Instance de la classe Http Client
  ) {}

  public getChannelsFromDatabase(url: string): void {
    this.httpClient

      .get(url)

      .subscribe((response) => this._channels.next(response));
  }

  /**

   * get channel list

   */

  public get channels() {
    return this._channels;
  }

  /**

   * get a specific channel by id

   */

  public getChannel(url: string, id: number) {
    url = `${url}/list/${id}`;
    this.httpClient
      .get(url)
      .subscribe((response) => this.channel.next(response));
  }

  public get channel() {
    return this._channel;
  }

  public createChannel(url: string, channel: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers,
    };

    this.httpClient
      .post(url, channel, options)

      .subscribe((response) => console.log(response));
  }

  /**
   * Update Channel
   */

  public updateChannel(url:string, channel:any) {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers,
    };

    this.httpClient
      .post(url, channel, options)

      .subscribe((response) => console.log(response));
  }
}
