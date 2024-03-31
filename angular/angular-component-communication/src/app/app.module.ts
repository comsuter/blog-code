import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroChildComponent } from './parent-to-child/hero-child.component';
import { HeroParentComponent } from './parent-to-child/hero-parent.component';
import { NameChildComponent } from './parent-to-child-setter/name-child.component';
import { NameParentComponent } from './parent-to-child-setter/name-parent.component';
import { VersionChildComponent } from './parent-to-child-on-changes/version-child.component';
import { VersionParentComponent } from './parent-to-child-on-changes/version-parent.component';
import { VoterComponent } from './child-to-parent/voter.component';
import { VoteTakerComponent } from './child-to-parent/votetaker.component';
import { CountdownTimerComponent } from './parent-to-child-localVar-or-viewChild/countdown-timer.component';
import { CountdownLocalVarParentComponent } from './parent-to-child-localVar-or-viewChild/countdown-parent-by-localVar.component';
import { CountdownViewChildParentComponent } from './parent-to-child-localVar-or-viewChild/countdown-parent-by-viewChild.component';
import { MissionControlComponent } from './bidirectional-service/mission-control.component';
import { AstronautComponent } from './bidirectional-service/astronaut.component';


@NgModule({
  declarations: [
    AppComponent,

    HeroChildComponent,
    HeroParentComponent,

    NameChildComponent,
    NameParentComponent,

    VersionChildComponent,
    VersionParentComponent,

    VoterComponent,
    VoteTakerComponent,

    CountdownTimerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,

    MissionControlComponent,
    AstronautComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
