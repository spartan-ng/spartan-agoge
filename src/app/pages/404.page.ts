import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmEmptyImports } from '@spartan-ng/helm/empty';
import { BaseLayout } from '../layouts/base.layout';

@Component({
  selector: 'spartan-404-page',
  imports: [BaseLayout, HlmEmptyImports, HlmButtonImports, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <spartan-base-layout mainClasses="min-h-[80vh] flex items-center">
      <hlm-empty>
        <hlm-empty-header>
          <span class="text-primary text-sm">404</span>
          <h1 hlmEmptyTitle>Page not found</h1>
          <p hlmEmptyDescription>The page you're looking for doesn't exist.</p>
        </hlm-empty-header>
        <hlm-empty-content>
          <button hlmBtn variant="outline" size="sm" routerLink="/">Go back home</button>
        </hlm-empty-content>
      </hlm-empty>
    </spartan-base-layout>
  `,
})
export class NotFoundPage {}
