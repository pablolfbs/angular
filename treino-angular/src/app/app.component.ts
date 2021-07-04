import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'treino-angular'
  inputTemperatura: boolean = false
  inputImc: boolean = false
  inputCadastroUsuario: boolean = false
  
  constructor() { }

  ngOnInit(): void { }

  showInputTemperatura() {
    this.inputTemperatura = !this.inputTemperatura ? true : false
    this.inputImc = false
    this.inputCadastroUsuario = false
  }

  showInputImc() {
    this.inputImc = !this.inputImc ? true : false
    this.inputTemperatura = false
    this.inputCadastroUsuario = false
  }

  showInputCadastroUsuario() {
    this.inputCadastroUsuario = !this.inputCadastroUsuario ? true : false
    this.inputTemperatura = false
    this.inputImc = false
  }

}
