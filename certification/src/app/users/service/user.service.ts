import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; //Todo : 2.A import de la class behavior subject
import { HttpClient, HttpHeaders } from '@angular/common/http'; // Todo : 3.A import de http client le 1 dans book module

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //Todo : 2.B Creation de la propriété Observable
  public _users = new BehaviorSubject<any>([]);
  public _user = new BehaviorSubject<any>({});

  constructor(
    private httpClient: HttpClient // Todo 3.B Instance de la classe Http Client
  ) {}

  public getUsersFromDatabase(url: string): void {
    this.httpClient
      .get(url)
      .subscribe((response) => this._users.next(response));
  }
  /**
   * get users list
   */
  public get users() {
    return this._users;
  }

  /**
   * get a specific user by id
   */
  public getUser(url:string, id: number)
  {
    url = `${url}/${id}`;
    this.httpClient.get(url).subscribe(response => this.user.next(response));

   }

   public get user(){
    return this._user;
   }

  public createUser(url: string, user: any) {

    const headers = new HttpHeaders({
      'Content-Type' : 'application/json'
    });

    const options = {
      headers
    }
    this.httpClient.post(url, user, options)
      .subscribe(response => console.log(response));
  }
  public editChannel(url: string, id: number|undefined, channel: any): void
  {
    url = `${url}/put/${id}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers
    };

    // console.log(url, channel);
    this.httpClient.patch(url, channel, options)
      .subscribe(response => console.log(response));
  }


  public deleteChannel(url: string, id: number|undefined): void
  {
    url = `${url}/${id}`;

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    // });

    // const options = {
    //   headers
    // };

    // console.log(url, channel);
    // this.httpClient.delete(url, options)
    this.httpClient.delete(url)
      .subscribe(response => console.log(response));
  }


  public editUser(url: string, id: number|undefined, user: any): void
   {
     url = `${url}/put/${id}`;

     const headers = new HttpHeaders({
       'Content-Type': 'application/json',
     });

     const options = {
       headers
     };

     // console.log(url, user);
     this.httpClient.patch(url, user, options)
       .subscribe(response => console.log(response));
   }


   public deleteUser(url: string, id: number|undefined): void
   {
     url = `${url}/${id}`;

     // const headers = new HttpHeaders({
     //   'Content-Type': 'application/json',
     // });

     // const options = {
     //   headers
     // };

     // console.log(url, user);
     // this.httpClient.delete(url, options)
     this.httpClient.delete(url)
       .subscribe(response => console.log(response));
   }


}
