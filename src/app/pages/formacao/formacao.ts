import { Component, inject, OnInit, signal, HostListener, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';

export interface DiplomaItem {
  id: string;
  titulo: string;
  subtitulo: string;
  instituicao: string;
  curso: string;
  grau: string;
  periodo: string;
  conclusao: string;
  colacao: string;
  emissao: string;
  descricao: string;
  imagemUrl: string;
  altText: string;
}

@Component({
  selector: 'app-formacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formacao.html',
  styleUrl: './formacao.css',
})
export class FormacaoComponent implements OnInit {
  private meta = inject(Meta);
  private platformId = inject(PLATFORM_ID);

  readonly diplomaAds: DiplomaItem = {
    id: 'ads-unicsul',
    titulo: 'Diploma (CST) Curso Superior de Tecnologia',
    subtitulo: 'Análise e Desenvolvimento de Sistemas',
    instituicao: 'Universidade Cruzeiro do Sul (UNICSUL)',
    curso: 'Análise e Desenvolvimento de Sistemas',
    grau: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    periodo: '2018 – 2020',
    conclusao: '30 de junho de 2020',
    colacao: '03 de agosto de 2020',
    emissao: '11 de setembro de 2020',
    descricao: 'Diploma oficial de Graduação Superior emitido e registrado pela Universidade Cruzeiro do Sul, reconhecido pelo Ministério da Educação (MEC), certificando a outorga de grau em Análise e Desenvolvimento de Sistemas.',
    imagemUrl: '/img/diploma-cst-unicsul.jpg',
    altText: 'Diploma de Graduação Superior em Análise e Desenvolvimento de Sistemas - Universidade Cruzeiro do Sul'
  };

  modalAberto = signal(false);
  zoomNivel = signal(1); // 1.0 (ajuste), 1.4, 1.8, 2.2
  diplomaAtivo = signal<DiplomaItem | null>(null);

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Formação acadêmica em Análise e Desenvolvimento de Sistemas pela Universidade Cruzeiro do Sul, cursos técnicos e competências em Engenharia de Software, DevOps e Metodologias Ágeis.'
    });
  }

  abrirModal(diploma: DiplomaItem): void {
    this.diplomaAtivo.set(diploma);
    this.zoomNivel.set(1);
    this.modalAberto.set(true);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  fecharModal(): void {
    this.modalAberto.set(false);
    this.zoomNivel.set(1);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  toggleZoom(): void {
    this.zoomNivel.update(z => (z === 1 ? 1.6 : 1));
  }

  aumentarZoom(): void {
    this.zoomNivel.update(z => Math.min(2.2, +(z + 0.3).toFixed(1)));
  }

  diminuirZoom(): void {
    this.zoomNivel.update(z => Math.max(1, +(z - 0.3).toFixed(1)));
  }

  resetarZoom(): void {
    this.zoomNivel.set(1);
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.modalAberto()) {
      this.fecharModal();
    }
  }
}
