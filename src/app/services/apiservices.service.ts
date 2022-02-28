import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {

  constructor(private http: HttpClient) { }

  url = 'http://165.22.222.20/demo/shreesaidarshan/public/api/warehouse-list';

  schoollist(searchName: any): Observable<any> {

    return this.http.get(`${this.url}?name=${searchName}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer t4yweerwerwerwwer`
      })
    }
    )
  }
}
