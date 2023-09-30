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

  nomes = ['Pão', 'Manteiga', 'Tapioca', 'Bolo', 'Leite'];

  ngOnInit() {
    for (let i = 1; i <= 1000; i++) {
      const nomeAleatorio =
        this.nomes[Math.floor(Math.random() * this.nomes.length)];
      const produto = {
        nome: nomeAleatorio,
        codigo: `${i}`,
        preco: Math.floor(Math.random() * 100) + 1,
      };
      this.produtos.push(produto);
    }

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
