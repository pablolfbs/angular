import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-app2',
  templateUrl: './app2.component.html',
  styleUrls: ['./app2.component.css']
})
export class App2Component implements OnInit {

  teste: string = 'teste'

  valor: string = ''

  public form!: FormGroup

  groups=[
    {
      "name": "pencils",
      "items": "red pencil"
    },
    {
      "name": "rubbers",
      "items": "big rubber"
    },
 ]

  valores: any[] = [
    {
      position: 1,
      value: 'One'
    },
    {
      position: 2,
      value: 'Two'
    },
    {
      position: 3,
      value: 'Three'
    }
  ]

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      login: ['', Validators.compose([
        Validators.minLength(5),
        Validators.maxLength(15),
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(8),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.required
      ])],
      description: ['', Validators.compose([
        Validators.maxLength(150)
      ])]
    })
  }

  add() {
    alert('teste')
  }

  ngOnInit(): void {
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    console.log(color)
    return color
  }

  // addItem(index: number) {
  //   var currentElement = this.groups[index]
  //   this.groups.splice(index, 0, currentElement)
  // }

  apagar() {
    document.querySelector('#select')?.setAttribute('hidden', 'true')
  }

}
