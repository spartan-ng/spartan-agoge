import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmToaster } from '@spartan-ng/helm/sonner';

@Component({
  selector: 'spartan-root',
  imports: [RouterOutlet, HlmToaster],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <router-outlet />

    @defer {
      <hlm-toaster />
    }
  `,
})
export class App {}
