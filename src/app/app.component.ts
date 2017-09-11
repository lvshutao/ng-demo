import { Component } from '@angular/core';

import { SettingsService } from './core/settings/settings.service';
import { TranslatorService } from './core/translator/translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private settings: SettingsService, tsServ: TranslatorService
  ) {
    setTimeout(function () {
      tsServ.use(settings.layout.lang);
    }, 500);
  }

}
