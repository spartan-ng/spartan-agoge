import { Component } from '@angular/core';
import { hlmH1, hlmH3 } from '@spartan-ng/helm/typography';
import { BaseLayout } from '../../layouts/base.layout';
import { QuestionnaireDialogDemo } from './questionnaire-dialog.demo';

@Component({
  selector: 'spartan-demo-page',
  imports: [BaseLayout, QuestionnaireDialogDemo],
  template: `
    <spartan-base-layout>
      <section class="mx-auto flex max-w-(--breakpoint-md) flex-col px-4 pb-20">
        <div>
          <h1 class="${hlmH1}">Demo</h1>
          <p class="text-muted-foreground mt-2 text-lg">
            Showcase of various spartan/ui components.
          </p>
        </div>

        <h2 id="questionnaire-dialog" class="${hlmH3} pt-(--header-height)">
          Questionnaire Dialog
        </h2>
        <div class="border-border mt-4 flex min-h-32 items-center justify-center rounded-xl border">
          <spartan-questionnaire-dialog-demo></spartan-questionnaire-dialog-demo>
        </div>
      </section>
    </spartan-base-layout>
  `,
})
export class DemoPage {}
