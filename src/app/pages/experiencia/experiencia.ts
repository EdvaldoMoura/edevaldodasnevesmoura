import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  templateUrl: './experiencia.html',
})
export class ExperienciaComponent implements OnInit {
  private meta = inject(Meta);

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Experiência profissional de Edevaldo das Neves Moura: 14 anos atuando como Analista de Sistemas, implantação de ERP TOTVS Protheus e RM, DBA, Cloud AWS e Docência em Tecnologia.'
    });
  }
}
