import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'treino-angular'
  campo: string = ''
  
  constructor() { }

  ngOnInit(): void { }

  showInput(campo: string) {
    this.campo = campo
  }
  
}
