import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.html',
})
export class ContatoComponent implements OnInit {
  private meta = inject(Meta);

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Entre em contato com Edevaldo das Neves Moura em São Paulo - SP. Disponível para oportunidades e consultoria como Analista de Sistemas, Desenvolvedor Full Stack, DBA e Cloud.'
    });
  }
}
