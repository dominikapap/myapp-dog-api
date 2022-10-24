import { Component, OnInit } from '@angular/core';
import { DogBreeds } from './interface/dog-breeds';
import { DogbreedsService } from './services/dogbreeds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  http: any;

constructor(private dogBreeds : DogbreedsService)  {

}

breedsData?: DogBreeds;
dogImage? : any;
dogs?:any ;
selectedBreed:string = "--wybierz rasę--";
myUrl: any;
letsContinue?: boolean = false;

  ngOnInit(): void {
    this.dogBreeds.getBreedsData()
    .subscribe({
      next: (response) => {
        this.breedsData = response;
        return  this.dogs = Object.keys(this.breedsData.message);
      }
    })
   
  }

 

showDetails(){

  let dogsDetail = document.querySelector('.dogs-details') as HTMLElement;
    
      
  if (this.selectedBreed === "--wybierz rasę--"){
      dogsDetail.innerHTML = ''
  }else {

    this.dogBreeds.getDogImage(this.selectedBreed)
      .subscribe({
        next: (response) => {
          dogsDetail.innerHTML = `
    <img src = ${response.message} class="dog-img">
    <p> Poczytaj więcej o tej rasie na Wikipedii:
      <a href= "https://en.wikipedia.org/wiki/${this.selectedBreed}" target="_blank">${this.selectedBreed}</a>
    </p>`;
    
    let dogImg: HTMLImageElement = document.createElement('img');
    dogImg.setAttribute('src', response.message.toString());
    dogImg.classList.add('dog-img');

    let p : HTMLParagraphElement = document.createElement('p');
    p.textContent = "Poczytaj więcej o tej rasie na Wikipedii:"

    let a : HTMLAnchorElement  = document.createElement('a');
    a.textContent = this.selectedBreed;
    a.href = "https://en.wikipedia.org/wiki/${this.selectedBreed}";
    p.append(a);
    dogsDetail.append(dogImg, p);

          
        }
      })
  /*this.getImage(this.selectedBreed);


    dogsDetail.innerHTML = `
    <img src = ${this.dogImage}>
    <p> Poczytaj więcej o tej rasie na Wikipedii:
      <a href = "https://en.wikipedia.org/wiki/${this.selectedBreed}">${this.selectedBreed}</a>
    </p>`;*/
   
  } }
    
}



