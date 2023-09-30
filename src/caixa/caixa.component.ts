import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

type Produtos = {
  nome: string;
  preco: number;
  codigo: string;
};

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
  styleUrls: ['./caixa.component.css'],
})
export class CaixaComponent implements OnInit {
  public resource: FormGroup;
  produtos: Produtos[] = [];

  produtosCadastrados: Produtos[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.resource = this.fb.group({
      codigo: [null, [Validators.required]],
    });
  }

  cadastrarProduto() {
    if (this.resource.invalid) this.resource.markAllAsTouched();
    const codigo = this.resource.get('codigo').value;
    const produto = this.produtos.find((x) => x.codigo === codigo);

    if (produto) this.produtosCadastrados.push(produto);
    this.resource.reset();
  }
}
