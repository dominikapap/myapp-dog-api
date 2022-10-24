import { HttpClient } from '@angular/common/http';
import { R3SelectorScopeMode } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DogBreeds } from '../interface/dog-breeds';
import { DogImage } from '../interface/dog-image';

@Injectable({
  providedIn: 'root'
})
export class DogbreedsService {

  constructor(private http: HttpClient) { }

  getBreedsData():Observable<DogBreeds>{
    return this.http.get<DogBreeds>(`${environment.dogBreedsApiBase}/breeds/list/all`)
  }

  getDogImage(breed: any ):Observable<DogImage>{
    if ((breed === "--wybierz rasę--")){
      
    }
    return this.http.get<DogImage>(`${environment.dogBreedsApiBase}/breed/${breed}/images/random`)
    
    
  }
    getDogImage2(breed:string){
     return this.http.get(`${environment.dogBreedsApiBase}/breed/${breed}/images/random`)
   }
}
