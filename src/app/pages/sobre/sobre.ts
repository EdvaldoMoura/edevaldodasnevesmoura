import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-sobre',
  standalone: true,
  templateUrl: './sobre.html',
})
export class SobreComponent implements OnInit {
  private meta = inject(Meta);

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Conheça o perfil técnico multidisciplinar de Edevaldo das Neves Moura: Desenvolvimento Web, Mobile e Desktop, Servidores Linux/Windows, Cloud AWS/Azure/GCP e Segurança da Informação.'
    });
  }
}
