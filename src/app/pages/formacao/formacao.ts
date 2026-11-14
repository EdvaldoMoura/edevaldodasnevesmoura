import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-formacao',
  standalone: true,
  templateUrl: './formacao.html',
})
export class FormacaoComponent implements OnInit {
  private meta = inject(Meta);

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Formação acadêmica em Análise e Desenvolvimento de Sistemas pela Universidade Cruzeiro do Sul, cursos técnicos e competências em Engenharia de Software, DevOps e Metodologias Ágeis.'
    });
  }
}
