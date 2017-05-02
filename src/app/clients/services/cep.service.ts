import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'




@Injectable()
export class CepService {

  constructor(private http:Http) { }
  search(cep):Observable<any>{
    return this.http.get("https://viacep.com.br/ws/"+cep+"/json/")
    .map((res:Response) => res.json())
  }
}
