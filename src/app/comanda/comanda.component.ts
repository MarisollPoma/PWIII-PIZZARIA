import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Form } from '@angular/forms';

@Component({
  selector: 'has-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})

export class ComandaComponent implements OnInit { 

  formPizza : FormGroup;

  constructor (public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formPizza = this.formBuilder.group({
      chopp : this.formBuilder.control('Chopp'),
      pizzas : this.formBuilder.control('Pizzas'),
      recheios : this.formBuilder.control('Recheios'),
      pessoas : this.formBuilder.control('Pessoa')
    })
    
  }

}
