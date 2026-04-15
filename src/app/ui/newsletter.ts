import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { email, form, FormField, required, submit } from '@angular/forms/signals';
import { toast } from '@spartan-ng/brain/sonner';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmSpinnerImports } from '@spartan-ng/helm/spinner';

@Component({
  selector: 'spartan-newsletter',
  imports: [FormField, HlmButtonImports, HlmFieldImports, HlmSpinnerImports, HlmInputImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    id: 'newsletter',
    class: 'block py-16',
  },
  template: `
    <div class="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:gap-8 lg:px-8">
      <div class="flex max-w-xl flex-col gap-4 lg:col-span-7">
        <h2 class="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Enroll to the spartan/ui agoge trainings program
        </h2>
        <p class="text-muted-foreground text-lg text-balance">
          Start your journy to master spartan/ui now!
        </p>
      </div>
      <form class="max-w-md lg:col-span-5" (submit)="subscribe($event)">
        <hlm-field-group>
          <hlm-field>
            <input hlmInput type="email" placeholder="Enter your email" [formField]="form.email" />

            <hlm-field-error validator="required">Email is required</hlm-field-error>
            <hlm-field-error validator="email">Invalid email address</hlm-field-error>
          </hlm-field>
          <hlm-field orientation="horizontal">
            <button hlmBtn type="submit" [disabled]="_loading()">
              @if (_loading()) {
                <hlm-spinner />
              }
              Subscribe
            </button>
          </hlm-field>
        </hlm-field-group>
      </form>
    </div>
  `,
})
export class Newsletter {
  protected readonly _model = signal({
    email: '',
  });

  public readonly form = form(this._model, (schemaPath) => {
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Invalid email address' });
  });

  protected readonly _loading = signal(false);

  async subscribe(event: Event) {
    event.preventDefault();

    submit(this.form, async () => {
      this._loading.set(true);
      const { email } = this._model();

      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Subscribed with email:', email);
      this._loading.set(false);

      toast.success('Enrolled successfully!');
    });
  }
}
