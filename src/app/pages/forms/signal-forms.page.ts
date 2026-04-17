import { ChangeDetectionStrategy, Component } from '@angular/core';
import { hlmCode, hlmH1, hlmH3, hlmH4, hlmP } from '@spartan-ng/helm/typography';
import { BaseLayout } from '../../layouts/base.layout';
import { SignalFormInputDemo } from './signal-forms--input.demo';
import { SignalFormSelectDemo } from './signal-forms--select.demo';
import { BugFormsDemo } from './signal-forms.demo';

@Component({
  selector: 'spartan-signal-forms-page',
  imports: [BaseLayout, BugFormsDemo, SignalFormInputDemo, SignalFormSelectDemo],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <spartan-base-layout>
      <section class="mx-auto flex max-w-(--breakpoint-md) flex-col px-4 pb-20">
        <div>
          <h1 class="${hlmH1}">Signal Forms</h1>
          <p class="text-muted-foreground mt-2 text-lg">
            Build forms in Angular using Signal Forms.
          </p>
        </div>

        <p class="${hlmP}">
          In this guide, we will take a look at building forms with Signal Forms. We'll cover
          building forms with the
          <code class="${hlmCode}">HlmField</code>
          component, how to handle validation and how to display errors.
        </p>

        <h2 id="demo" class="${hlmH3} pt-14">Demo</h2>

        <p class="${hlmP}">
          We are going to build the following form. It has a simple text input and a textarea. On
          submit, we'll validate the form data and display any errors.
        </p>

        <div class="mt-4">
          <spartan-bug-report-form />
        </div>

        <h2 id="examples" class="${hlmH3} pt-14">Examples</h2>

        <h3 id="input" class="${hlmH4} pt-14">Input</h3>

        <div class="mt-4">
          <spartan-signal-form-input-demo />
        </div>

        <h3 id="select" class="${hlmH4} pt-14">Select</h3>

        <div class="mt-4">
          <spartan-signal-form-select-demo />
        </div>
      </section>
    </spartan-base-layout>
  `,
})
export class SignalFormsPage {}
