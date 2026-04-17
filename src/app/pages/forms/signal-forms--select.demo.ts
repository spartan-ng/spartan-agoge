import { Component, signal } from '@angular/core';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmCardImports } from '@spartan-ng/helm/card';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmSelectImports } from '@spartan-ng/helm/select';

@Component({
  selector: 'spartan-signal-form-select-demo',
  imports: [FormField, HlmCardImports, HlmFieldImports, HlmSelectImports, HlmButtonImports],
  host: { class: 'w-full sm:max-w-md' },
  template: `
    <hlm-card>
      <hlm-card-header>
        <h3 hlmCardTitle>Profile Settings</h3>
        <p hlmCardDescription>Update your profile information below.</p>
      </hlm-card-header>
      <div hlmCardContent>
        <form novalidate id="form-select-demo" (submit)="submit($event)">
          <hlm-field-group>
            <hlm-field orientation="responsive">
              <hlm-field-content>
                <label hlmFieldLabel for="language">Spoken Language</label>
                <hlm-field-description>
                  For best results, select the language you speak.
                </hlm-field-description>

                @for (error of form.language().errors(); track error) {
                  <hlm-field-error [validator]="error.kind">
                    {{ error.message }}
                  </hlm-field-error>
                }
              </hlm-field-content>
              <hlm-select [formField]="form.language" [itemToString]="itemToString">
                <hlm-select-trigger buttonId="language">
                  <hlm-select-value placeholder="Select" />
                </hlm-select-trigger>
                <hlm-select-content *hlmSelectPortal>
                  <hlm-select-group>
                    <hlm-select-item value="auto">Auto</hlm-select-item>
                    <div hlmSelectSeparator></div>
                    @for (language of spokenLanguages; track $index) {
                      <hlm-select-item [value]="language.value">{{
                        language.label
                      }}</hlm-select-item>
                    }
                  </hlm-select-group>
                </hlm-select-content>
              </hlm-select>
            </hlm-field>
          </hlm-field-group>
        </form>
      </div>
      <hlm-card-footer>
        <hlm-field orientation="horizontal">
          <button hlmBtn variant="outline" type="button" (click)="reset()">Reset</button>
          <button hlmBtn type="submit" form="form-select-demo">Submit</button>
        </hlm-field>
      </hlm-card-footer>
    </hlm-card>
  `,
})
export class SignalFormSelectDemo {
  public spokenLanguages = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
    { label: 'German', value: 'de' },
    { label: 'Italian', value: 'it' },
    { label: 'Chinese', value: 'zh' },
    { label: 'Japanese', value: 'ja' },
  ];

  public itemToString = (value: string) => {
    if (value === 'auto') {
      return 'Auto';
    }
    const language = this.spokenLanguages.find((lang) => lang.value === value);
    return language ? language.label : '';
  };

  // TODO empty string is handled as value and doesn't show placeholder
  protected readonly _model = signal({
    language: '',
  });

  public readonly form = form(this._model, (schemaPath) => {
    required(schemaPath.language, { message: 'Language is a required field.' });
    // TODO custom validation auto detect not allowed
  });

  async submit(event: Event) {
    event.preventDefault();

    // marks all fields as touched, revealing validation errors
    submit(this.form, async () => {
      const { language } = this._model();

      console.log('Submitted with language:', language);
    });
  }

  reset() {
    this.form().reset({
      language: '',
    });
  }
}
