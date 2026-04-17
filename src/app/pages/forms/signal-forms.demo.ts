import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { form, FormField, maxLength, minLength, required, submit } from '@angular/forms/signals';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputImports } from '@spartan-ng/helm/input';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';

@Component({
  selector: 'spartan-bug-report-form',
  imports: [
    FormField,
    HlmCardImports,
    HlmFieldImports,
    HlmButtonImports,
    HlmInputImports,
    HlmInputGroupImports,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <hlm-card>
      <hlm-card-header>
        <h3 hlmCardTitle>Bug Report</h3>
        <p hlmCardDescription>Help us improve by reporting bugs you encounter.</p>
      </hlm-card-header>
      <div hlmCardContent>
        <!-- use novalidate to disable browser validation -->
        <form novalidate id="form-bug-report" (submit)="submit($event)">
          <hlm-field-group>
            <hlm-field>
              <label hlmFieldLabel for="title">Bug Title</label>
              <input
                id="title"
                hlmInput
                placeholder="Login button not working on mobile"
                autoComplete="off"
                [formField]="form.title"
              />

              @for (error of form.title().errors(); track error) {
                <hlm-field-error [validator]="error.kind">
                  {{ error.message }}
                </hlm-field-error>
              }
            </hlm-field>
            <hlm-field>
              <label hlmFieldLabel for="description">Description</label>
              <hlm-input-group>
                <textarea
                  hlmInputGroupTextarea
                  id="description"
                  class="min-h-24"
                  placeholder="I'm having an issue with the login button on mobile."
                  rows="6"
                  [formField]="form.description"
                ></textarea>
                <hlm-input-group-addon align="block-end">
                  <span hlmInputGroupText> {{ descriptionLength() }}/100 characters </span>
                </hlm-input-group-addon>
              </hlm-input-group>
              <hlm-field-description>
                Include steps to reproduce, expected behavior, and what actually happened.
              </hlm-field-description>

              @for (error of form.description().errors(); track error) {
                <hlm-field-error [validator]="error.kind">
                  {{ error.message }}
                </hlm-field-error>
              }
            </hlm-field>
          </hlm-field-group>
        </form>
      </div>
      <hlm-card-footer>
        <hlm-field orientation="horizontal">
          <button hlmBtn variant="outline" type="button" (click)="reset()">Reset</button>
          <button hlmBtn type="submit" form="form-bug-report">Submit</button>
        </hlm-field>
      </hlm-card-footer>
    </hlm-card>
  `,
})
export class BugFormsDemo {
  protected readonly _model = signal({
    title: '',
    description: '',
  });

  public readonly form = form(this._model, (schemaPath) => {
    required(schemaPath.title, { message: 'Title must be entered.' });
    minLength(schemaPath.title, 5, { message: 'Title must be at least 5 characters.' });
    maxLength(schemaPath.title, 100, { message: 'Title cannot exceed 32 characters.' });

    required(schemaPath.description, { message: 'Description must be entered.' });
    minLength(schemaPath.description, 20, {
      message: 'Description must be at least 20 characters.',
    });
    maxLength(schemaPath.description, 100, {
      message: 'Description must be at most 100 characters',
    });
  });

  descriptionLength = computed(() => this.form.description().value().length);

  async submit(event: Event) {
    event.preventDefault();

    // marks all fields as touched, revealing validation errors
    submit(this.form, async () => {
      const { title, description } = this._model();

      console.log('Submitted with title:', title, 'and description:', description);
    });
  }

  reset() {
    this.form().reset({
      title: '',
      description: '',
    });
  }
}
