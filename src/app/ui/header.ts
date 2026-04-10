import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub, lucideMoon, lucideSun, lucideSwords } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { config } from '../config';
import { ThemeService } from '../utils/theme';

@Component({
  selector: 'spartan-header',
  imports: [RouterLink, HlmButtonImports, NgIcon],
  providers: [provideIcons({ lucideSwords, lucideGithub, lucideSun, lucideMoon })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="bg-background/40 sticky top-0 z-10 flex h-(--header-height) items-center gap-2 px-4 backdrop-blur-lg"
    >
      <a routerLink="/" hlmBtn variant="ghost">
        <ng-icon name="lucideSwords" />
        agoge
      </a>

      <div class="ml-auto flex gap-1">
        <a
          hlmBtn
          size="icon-sm"
          variant="ghost"
          href="${config.github}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ng-icon name="lucideGithub" />
        </a>
        <button hlmBtn size="icon-sm" variant="ghost" (click)="_themeService.toggle()">
          <ng-icon name="lucideMoon" class="not-dark:hidden" />
          <ng-icon name="lucideSun" class="dark:hidden" />
          <span class="sr-only">Toggle theme</span>
        </button>
      </div>
    </header>
  `,
})
export class Header {
  protected _themeService = inject(ThemeService);
}
