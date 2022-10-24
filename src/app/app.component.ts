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
  dogs?:any ;
  selectedBreed:string = "--wybierz rasę--";

    ngOnInit(): void {
      this.dogBreeds.getBreedsData()
      .subscribe({
        next: (response) => {
          this.breedsData = response;
          return  this.dogs = Object.keys(this.breedsData.message);
        },
        error: (e) => {
          console.log(e);
          alert("Coś poszło nie tak, spróbuj ponownie później");
        },
      })
    }

  

  showDogsDetails(){

    let dogsDetails = document.querySelector('.dogs-details') as HTMLElement;

    if (this.selectedBreed === "--wybierz rasę--"){
        dogsDetails.innerHTML = ''
    }else {
      this.dogBreeds.getDogImage(this.selectedBreed)
        .subscribe({
          next: (response) => {
          dogsDetails.innerHTML='';

          let dogImg: HTMLImageElement = document.createElement('img');
          dogImg.setAttribute('src', response.message.toString());
          dogImg.setAttribute('alt', this.selectedBreed);
          dogImg.classList.add('dog-img');

          let p : HTMLParagraphElement = document.createElement('p');
          p.textContent = "Poczytaj więcej o tej rasie na Wikipedii: "

          let a : HTMLAnchorElement  = document.createElement('a');
          a.textContent = this.selectedBreed;
          a.href = `https://en.wikipedia.org/wiki/${this.selectedBreed}`;
          p.append(a);
          
          dogsDetails.append(dogImg, p)

          }, error: (e) => {
            console.log(e);
            alert("Coś poszło nie tak, spróbuj ponownie później");
          },
        })
    } 
  }
      
}




