import { Component, inject, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.html',
})
export class InicioComponent implements OnInit {
  private meta = inject(Meta);

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Currículo oficial e portfólio de Edevaldo das Neves Moura, Analista de Sistemas 20 anos de atuação, AI-First Developer, DevOps, DBA e Pentester, com formação superior, Desenvolvedor Full Stack, Especialista Cloud, DBA e Segurança da Informação.'
    });
  }
}
