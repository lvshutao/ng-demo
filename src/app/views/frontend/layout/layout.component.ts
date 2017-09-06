import { Component, OnInit } from '@angular/core';

// 语言设置
import { SettingsService } from '../../../core/settings/settings.service';
import { TranslatorService } from '../../../core/translator/translator.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    public settings: SettingsService,
    public tsServ: TranslatorService
  ) { }

  ngOnInit() {
  }

  changeLang(lang: string) {
    this.tsServ.use(lang);
    this.settings.setLayout('lang', lang);
  }

}
