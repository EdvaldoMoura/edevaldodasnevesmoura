import { Component, inject, OnInit } from '@angular/core';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-experiencia',
  standalone: true,
  templateUrl: './experiencia.html',
})
export class ExperienciaComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.atualizarMetaTags(
      'Experiência profissional de Edevaldo das Neves Moura: 14 anos atuando como Analista de Sistemas, implantação de ERP TOTVS Protheus e RM, DBA, Cloud AWS e Docência em Tecnologia.',
      '/experiencia/'
    );
  }
}
