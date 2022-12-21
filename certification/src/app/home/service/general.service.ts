import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'; //Todo : 2.A import de la class behavior subject

import { HttpClient, HttpHeaders } from '@angular/common/http'; // Todo : 3.A import de http client le 1 dans book module

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  //Todo : 2.B Creation de la propriété Observable
  public _generals = new BehaviorSubject<any>({});

  constructor(
    private httpClient: HttpClient // Todo 3.B Instance de la classe Http Client
  ) {}

  public getGeneralFromDatabase(url: string): void {
    this.httpClient
      .get(url)
      .subscribe((response) => this._generals.next(response));
  }
  /**
   * get general list
   */
  public get generals() {
    return this._generals;
  }

}
