import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

// გვაძელევენ საშუალბას იმისა რომ ვნახოთ რა მონაცემი მოგვდის მონაცემთა ბაზიდან.
// მომავალი შეცდომები რომ არ დავუშვათ (წერისას, ან მონაცემების გამოტანისას)
export interface Car {
  id: number;
  brand: string;
  model: string;
  year: number;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  image1: null;
  image2: null;
  image3: null;
  price: number;
  multiplier: number;
  capacity: number;
  transmission: string;
  createdBy: string;
  createdByEmail: null;
  fuelCapacity: number;
  city: string;
  latitude: number;
  longitude: number;
  ownerPhoneNumber: null;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  message: string = 'This Is Message';
  currency: number = 65;
  percent: number = -5;
  today = new Date();
  cars: Car[] = [];

  constructor(public _http: HttpClient) {
    this._http
      .get('https://rentcar.webwide.ge/api/Car')
      .subscribe((data: any) => {
        data.forEach((car: Car) => {
          this.cars.push(car);
          console.log(this.cars);
        });
      });
  }

  getData() {}

  // უშუალოდ subscribe ნიშნავს request-ის გაგზანვას.
  // ხოლო გეთში უბრალოდ ვწერთ მისამართს
}
