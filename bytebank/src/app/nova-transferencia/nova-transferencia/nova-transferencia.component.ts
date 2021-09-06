import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter()

  valor!: number;
  destino!: number;

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    console.log('Valor: ', this.valor)
    console.log('Destino: ', this.destino)

    this.aoTransferir.emit({ valor: this.valor, destino: this.destino })
    this.limparCampos()
  }

  limparCampos() {
    this.valor = 0
    this.destino = 0
  }

}
