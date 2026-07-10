import { Component } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { hlmCode, hlmH1, hlmH3, hlmH4, hlmP } from '@spartan-ng/helm/typography';
import { BaseLayout } from '../../layouts/base.layout';
import { SignalFormCheckboxDemo } from './signal-forms--checkbox.demo';
import { SignalFormComplexDemo } from './signal-forms--complex.demo';
import { SignalFormCustomControlDemo } from './signal-forms--custom-control.demo';
import { SignalFormInputDemo } from './signal-forms--input.demo';
import { SignalFormRadioGroupDemo } from './signal-forms--radio-group.demo';
import { SignalFormSelectDemo } from './signal-forms--select.demo';
import { SignalFormSwitchDemo } from './signal-forms--switch.demo';
import { SignalFormTextareaDemo } from './signal-forms--textarea.demo';
import { BugFormsDemo } from './signal-forms.demo';

@Component({
  selector: 'spartan-signal-forms-page',
  imports: [
    BaseLayout,
    BugFormsDemo,
    HlmButtonImports,
    SignalFormInputDemo,
    SignalFormTextareaDemo,
    SignalFormSelectDemo,
    SignalFormCheckboxDemo,
    SignalFormRadioGroupDemo,
    SignalFormSwitchDemo,
    SignalFormComplexDemo,
    SignalFormCustomControlDemo,
  ],
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

        <h2 id="demo" class="${hlmH3} pt-(--header-height)">Demo</h2>

        <p class="${hlmP}">
          We are going to build the following form. It has a simple text input and a textarea. On
          submit, we'll validate the form data and display any errors.
        </p>

        <div class="mt-4">
          <spartan-bug-report-form />
        </div>

        <h2 id="examples" class="${hlmH3} pt-(--header-height)">Examples</h2>

        <h3 id="input" class="${hlmH4} pt-(--header-height)">Input</h3>

        <div class="mt-4">
          <spartan-signal-form-input-demo />
        </div>

        <h3 id="textarea" class="${hlmH4} pt-(--header-height)">Textarea</h3>

        <div class="mt-4">
          <spartan-signal-form-textarea-demo />
        </div>

        <h3 id="select" class="${hlmH4} pt-(--header-height)">Select</h3>

        <div class="mt-4">
          <spartan-signal-form-select-demo />
        </div>

        <h3 id="checkbox" class="${hlmH4} pt-(--header-height)">Checkbox</h3>

        <div class="mt-4">
          <spartan-signal-form-checkbox-demo />
        </div>

        <h3 id="radio-group" class="${hlmH4} pt-(--header-height)">Radio Group</h3>

        <div class="mt-4">
          <spartan-signal-form-radio-group-demo />
        </div>

        <h3 id="switch" class="${hlmH4} pt-(--header-height)">Switch</h3>

        <div class="mt-4">
          <spartan-signal-form-switch-demo />
        </div>

        <h3 id="complex-form" class="${hlmH4} pt-(--header-height)">Complex Form</h3>

        <div class="mt-4">
          <spartan-signal-form-complex-demo />
        </div>

        <h2 id="custom-control" class="${hlmH3} pt-(--header-height)">Custom Control</h2>
        <p class="${hlmP}">
          Signal Forms allows you to build
          <a
            href="https://angular.dev/guide/forms/signals/custom-controls"
            class="underline"
            target="_blank"
            rel="noopener"
          >
            custom form controls
          </a>
          using the <code class="${hlmCode}">FormValueControl</code> interface.
        </p>

        <p class="${hlmP}">
          In this example, we are going to build a custom password input control that toggles
          visibility and integrates seamlessly with Signal Forms.
        </p>

        <div class="mt-4">
          <spartan-signal-form-custom-control-demo />
        </div>
      </section>
    </spartan-base-layout>
  `,
})
export class SignalFormsPage {}
