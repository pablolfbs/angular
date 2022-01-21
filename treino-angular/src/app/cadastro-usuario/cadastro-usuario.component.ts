import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  formulario = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('[a-zA-Z ]*')]],
    cpf_cnpj: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.email]],
    telefone: [null, [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void { }

  submit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value)
      this.resetar()
    } else {
      console.log(this.formulario)
    }
  }

  resetar() {
    this.formulario.reset()
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

  errorMsg(campo: string) {
    return this.formulario.controls[campo].errors && this.isUntoched(campo)
  }

  formularioInvalido() {
    return !this.formulario.valid
  }

}
