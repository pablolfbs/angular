import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank'
  transferencias: any[] = [];
  
  transferir(e: { destino: number; valor: number[]; }) {
    console.log(e)
    const transferencia = { ...e, data: new Date() }
    this.transferencias.push(transferencia)
  }
  
}
