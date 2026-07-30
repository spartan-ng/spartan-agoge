import { type ClassProvider, DOCUMENT, inject, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { type RouterStateSnapshot, TitleStrategy } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable()
export class AppTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);

  updateTitle(snapshot: RouterStateSnapshot): void {
    const pageTitle = this.buildTitle(snapshot);
    const fullTitle = pageTitle
      ? '%s - spartan/ui agoge'.replace('%s', pageTitle)
      : 'spartan/ui agoge';
    this.title.setTitle(fullTitle);

    this.setCanonical(snapshot.url);
  }

  /**
   * Sets the canonical link in the header.
   * It supposes the header link is already present in the index.html
   */
  setCanonical(url: string): void {
    const pathWithoutFragment = url.split('#')[0];
    const fullPath = this.resolveUrl(pathWithoutFragment);
    this.document.querySelector('link[rel=canonical]')?.setAttribute('href', fullPath);
  }

  private resolveUrl(path: string): string {
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    const normalized = path.startsWith('/') ? path : `/${path}`;
    return `${environment.appUrl}${normalized}`;
  }
}

export function provideTitleStrategy(): ClassProvider {
  return { provide: TitleStrategy, useClass: AppTitleStrategy };
}
