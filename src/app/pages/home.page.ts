import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideGithub } from '@ng-icons/lucide';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { config } from '../config';
import { BaseLayout } from '../layouts/base.layout';

@Component({
  selector: 'spartan-home-page',
  imports: [BaseLayout, HlmButtonImports, NgIcon],
  providers: [provideIcons({ lucideGithub })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <spartan-base-layout>
      <div class="flex flex-col items-center gap-4 py-10">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl">spartan/ui Agoge</h1>
          <p class="text-muted-foreground mt-3 text-lg text-balance md:text-xl">
            Training ground for spartan/ui components
          </p>
        </div>

        <div class="flex gap-2">
          <a hlmBtn href="https://spartan.ng" target="_blank" rel="noopener noreferrer">
            Checkout spartan/ui
          </a>
          <a
            hlmBtn
            variant="outline"
            href="${config.github}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ng-icon name="lucideGithub" />
            GitHub
          </a>
        </div>
      </div>
    </spartan-base-layout>
  `,
})
export class HomePage {}
