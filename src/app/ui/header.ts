import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideMoon, lucideSun, lucideSwords } from '@ng-icons/lucide';
import { simpleDiscord, simpleGithub } from '@ng-icons/simple-icons';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { config } from '../config';
import { ThemeService } from '../tools/theme';

@Component({
  selector: 'spartan-header',
  imports: [RouterLink, HlmButtonImports, NgIcon],
  providers: [provideIcons({ simpleGithub, simpleDiscord, lucideSwords, lucideSun, lucideMoon })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="bg-background/40 sticky top-0 z-10 flex h-(--header-height) items-center gap-2 px-4 backdrop-blur-lg"
    >
      <a routerLink="/" hlmBtn variant="ghost" size="sm">
        <ng-icon name="lucideSwords" />
        agoge
      </a>

      <nav>
        <a hlmBtn variant="ghost" size="sm" routerLink="/forms"> Forms </a>
        <a hlmBtn variant="ghost" size="sm" routerLink="/demo"> Demo </a>
      </nav>

      <div class="ml-auto flex gap-2">
        <button hlmBtn size="icon-sm" variant="ghost" (click)="_themeService.toggle()">
          <ng-icon name="lucideMoon" class="dark:hidden" />
          <ng-icon name="lucideSun" class="not-dark:hidden" />
          <span class="sr-only">Toggle theme</span>
        </button>
        <a
          hlmBtn
          size="icon-sm"
          variant="ghost"
          href="${config.discord}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ng-icon name="simpleDiscord" />
          <span class="sr-only">Discord</span>
        </a>
        <a
          hlmBtn
          size="icon-sm"
          variant="ghost"
          href="${config.github}"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ng-icon name="simpleGithub" />
          <span class="sr-only">GitHub</span>
        </a>
      </div>
    </header>
  `,
})
export class Header {
  protected _themeService = inject(ThemeService);
}
