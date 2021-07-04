import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-celsius-fahrenheit',
  templateUrl: './celsius-fahrenheit.component.html',
  styleUrls: ['./celsius-fahrenheit.component.css']
})
export class CelsiusFahrenheitComponent implements OnInit {
  
  celsius: number = 0
  fahrenheit: number = this.celsiusToFahrenheit()

  constructor() { }

  ngOnInit(): void {
    // C = 5/9 x (F-32)
    // F = C x 1,8 + 32
  }

  celsiusToFahrenheit() {
    return this.fahrenheit = this.celsius! * 1.8 + 32
  }

  fahrenheitToCelsius() {
    return this.celsius = 5 / 9 * (this.fahrenheit! - 32)
  }

}
