import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/helm/utils';
import { ClassValue } from 'clsx';
import { Header } from '../ui/header';

@Component({
  selector: 'spartan-base-layout',
  imports: [Header],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <spartan-header />
    <main [class]="_computedMainClasses()">
      <ng-content />
    </main>
  `,
})
export class BaseLayout {
  public readonly mainClasses = input<ClassValue>('');
  protected readonly _computedMainClasses = computed(() =>
    hlm('mx-auto max-w-(--breakpoint-lg) px-4 pb-20', this.mainClasses()),
  );
}
