import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { LangSelectorComponent } from './lang-selector/lang-selector.component';
import { COMPOSITION_BUFFER_MODE, FormsModule } from '@angular/forms';
import { I18nSupportService } from './i18n-support.service';
import { LangSelectorBtnPipe } from './lang-selector/lang-selector-btn.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeMsgComponent,
    LangSelectorComponent,
    LangSelectorBtnPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    I18nSupportService, // 의존성 등록
    {provide: COMPOSITION_BUFFER_MODE, useValue: false} // 양방향 바인딩 시 한글입력 (한글 작성할 때마다 뷰에 바로 반영되도록)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
