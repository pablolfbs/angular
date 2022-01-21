import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  formulario = this.formBuilder.group({
    peso: [null, [Validators.required, Validators.min(0), Validators.max(400)]],
    altura: [null, [Validators.required, Validators.min(0.5), Validators.max(2.5)]]
  })

  resultado: number | undefined

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // IMC = Peso ÷ (Altura × Altura)
  }

  calcularImc() {
    if (!this.isInvalid('peso') && !this.isInvalid('altura'))
      this.resultado = this.formulario.controls.peso.value.replace(',', '.') / (this.formulario.controls.altura.value.replace(',', '.') * this.formulario.controls.altura.value.replace(',', '.'))
    else
      this.resultado = undefined
  }

  pesoInvalido() {
    return this.formulario.controls.peso.errors && this.isUntoched('peso')
  }

  alturaInvalida() {
    return this.formulario.controls.altura.errors && this.isUntoched('altura')
  }

  isInvalid(campo: string) {
    return !this.formulario.controls[campo]?.valid
  }

  isUntoched(campo: string) {
    return !this.formulario.controls[campo]?.pristine
  }

  aplicaCssErro(campo: string) {
    return { 'input-error': this.isInvalid(campo) && this.isUntoched(campo) }
  }
}
