import { Component } from '@angular/core';
import { MeuServicoService } from './services/MeuServicoService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'MARKETPLACE';

  constructor(private meuServico: MeuServicoService) {
    // O serviço está injetado e disponível para uso aqui.
  }
}
