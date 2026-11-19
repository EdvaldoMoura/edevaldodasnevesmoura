import { Injectable, Inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private meta: Meta, @Inject(DOCUMENT) private dom: Document) {}

  atualizarMetaTags(descricao: string, rotaRelativa: string) {
    const urlCompleta = `https://edevaldodasnevesmoura.com.br${rotaRelativa}`;

    this.meta.updateTag({ name: 'description', content: descricao });
    this.meta.updateTag({ property: 'og:description', content: descricao });
    this.meta.updateTag({ property: 'og:url', content: urlCompleta });

    this.atualizarCanonical(urlCompleta);
  }

  private atualizarCanonical(url: string) {
    const head = this.dom.getElementsByTagName('head')[0];

    // CORREÇÃO: Permitindo que a variável receba 'null' inicialmente
    let element: HTMLLinkElement | null = this.dom.querySelector(`link[rel='canonical']`);

    if (!element) {
      element = this.dom.createElement('link') as HTMLLinkElement;
      element.setAttribute('rel', 'canonical');
      head.appendChild(element);
    }
    element.setAttribute('href', url);
  }
}
