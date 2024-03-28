import { Component } from '@angular/core';
import { I18nSupportService } from '../i18n-support.service';
import { LANG_METADATA } from '../lang-metadata';

@Component({
  selector: 'app-lang-selector',
  templateUrl: './lang-selector.component.html',
  styleUrl: './lang-selector.component.css'
})
export class LangSelectorComponent {
  langMetadata = LANG_METADATA;
  langCode:string = '';

  constructor(public i18nSupportService: I18nSupportService) {
    this.langCode = i18nSupportService.langCode;
  }

  setLangCode(code: string) {
    this.i18nSupportService.langCode = code;
  }
}
