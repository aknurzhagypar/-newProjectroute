
import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  create(user): Observable<any> {

    return this.http.post<any>('http://localhost:3000/user', user);
  }
}
