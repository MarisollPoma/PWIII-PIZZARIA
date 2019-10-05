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
      chopp : this.formBuilder.control(''),
      pizzas : this.formBuilder.control(''),
      recheios : this.formBuilder.control(''),
      pessoas : this.formBuilder.control(''),
      servico : this.formBuilder.control('false')

      
    })

  }
  onProcessar() {
    
    let choop = this.formPizza.value.choop;
    let pizzas = this.formPizza.value.pizzas;
    let recheios = this.formPizza.value.recheios;
    let pessoas = this.formPizza.value.pessoas;
    let servico = this.formPizza.value.servico;


    let consumo = choop *  7.30 + pizzas * 31.50 + recheios * 5.90 ;
    
      if (consumo) {
servico = consumo * 0.1 ;
consumo = consumo + servico;       
      }

      let valorFinal = consumo + servico ;
      let valorPessoas = valorFinal / pessoas;

    
    alert (`consumo: R$ $(consumo) \n serviços: R$  $(consumo) \n Total: R$ $(valorFinal) \n Por Pessoa: R$ $(valorPessoas) `);
    

  }
}

