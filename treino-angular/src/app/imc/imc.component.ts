import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  formulario = this.formBuilder.group({
    peso: [null, [Validators.required]],
    altura: [null, [Validators.required]]
  })

  resultado: number | undefined

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // IMC = Peso ÷ (Altura × Altura)
  }

  calcularImc() {
    if (this.formulario.controls.peso.valid && this.formulario.controls.altura.valid)
      this.resultado = this.formulario.controls.peso.value / (this.formulario.controls.altura.value * this.formulario.controls.altura.value)
    else
      this.resultado = undefined
  }
}
